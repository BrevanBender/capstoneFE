import Ingredients from "./ingredients"
import'./indiDrink.css'
import { useState, useEffect } from "react"
import apiUrl from "./apiConfig"
import NewDrink from "./newDrink"
import Variant from "./variant"

const IndividualDrink = (props)=>{
    const [userDrinks, setUserDrinks] = useState([])
    const getDrinks = async () =>{
        const apiResponse = await fetch(`${apiUrl}variants`)
      
        const parsedResponse = await apiResponse.json()
        console.log(parsedResponse.data)
        setUserDrinks(
          parsedResponse.data
        )
      }
    
const createNewDrink= async (newDrink)=>{
        try {
          const apiResponse = await fetch(`${apiUrl}variants`, {
            method: 'POST',
            body: JSON.stringify(newDrink),
            headers: {
              "Content-Type": "application/json"
            }
          })
          const parsedResponse = await apiResponse.json()
          console.log(`response:${JSON.stringify(parsedResponse.data)}`)
          setUserDrinks([
            ...userDrinks,
           parsedResponse.data
          ])
        } catch (err) {
          console.log(err)
        }
      } 
    
      const drinkComment = async(idToUpdate, drinkToUpdate)=>{
        const apiResponse = await fetch(`${apiUrl}variants/${idToUpdate}`,{
          method: "PUT",
          body: JSON.stringify(drinkToUpdate),
          headers:{
            "Content-Type": "application/json"
          }
        })
        const newDrink = userDrinks.map(drink =>drink._id===idToUpdate ? drinkToUpdate : drink)
        setUserDrinks(
          newDrink
        )
      }
      useEffect(() => {
        getDrinks()}
        , [])
    return(
        <div className="indiDrink">
            

            <div className="eachDrink">
                <h2>{props.drink.strDrink}</h2>
                <img src={props.drink.strDrinkThumb} className="drinkImage"></img>
        
                <Ingredients drink={props.drink}></Ingredients>
            </div>
            <div id="userDrinks">
                {userDrinks.map((udrink)=>{
                    if(udrink.originalid == props.drink.idDrink){
                        return( <Variant drink={udrink} drinkComment={drinkComment}></Variant>)
                    }
                })}
            </div>
            <NewDrink drink={props.drink} createNewDrink={createNewDrink} getDrinks={getDrinks} ></NewDrink>
        </div>
    )
}
export default IndividualDrink