import { useEffect, useState } from "react"
import drinks from '../drinks';
import IndividualDrink from "./indiDrink/indiDrink"
import './drinkCont.css'
import Ingredients from "./indiDrink/ingredients";


const DrinkContainer = ()=>{
    const[showAll, setShow] = useState(true)
    const [desiredDrink, setDesiredDrink] = useState([])
    const[showDrink, setShowDrink] = useState([])
    const drinkPage = (drink)=>{
        console.log(drink)
        setShowDrink([
            drink
        ])
    }
    const convertDrinks = ()=>{
        let trialarr = []
        drinks.forEach((drink)=>{
            let convertDrink = {}
            convertDrink.strDrink = drink.strDrink
            convertDrink.strDrinkThumb = drink.strDrinkThumb
            convertDrink.strInstructions = drink.strInstructions
            convertDrink.ingredients = []
            for(let i=1; i<15; i++){
                convertDrink.ingredients.push(eval(`drink.strIngredient${i}`))
            }
            convertDrink.measures = []
            for(let i=1; i<15; i++){
                convertDrink.measures.push(eval(`drink.strMeasure${i}`))
            }
            trialarr.push(convertDrink)
        })
        setDesiredDrink(trialarr)
    }
    
    const indexPage =()=>{
        setShowDrink([])
    }
    useEffect(convertDrinks, [])
    const handleFilter= (phrase, drink)=>{
        console.log(`phrase ${phrase}`)
        console.log(`drink is ${drink}`)
        const fifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            const ingredients = []
            let counter = 0
            for(let num of fifteen){
                ingredients.push(eval(`drink.strIngredient${num}`))
                }
            ingredients.forEach((ing)=>{
                if(ing.contains(phrase)){
                    counter++
            }})
            if(counter > 0){
                return true
            }
            
        }
    const updateFilter =(e)=>{
        const filterDrink = desiredDrink.filter(handleFilter(e.target.value))
        setDesiredDrink(filterDrink)
    }
    return(
        <div>
            {showDrink.length === 0?
                <div className="index">
                    <input type='text' onChange={updateFilter}></input>
                    {desiredDrink.map((drink, index)=>{
                        return(
                            <div className="ogdrink" onClick={()=>{drinkPage(drink)}}>
                                <img src={drink.strDrinkThumb} className="drinkImage"></img>
                                <h2>{drink.strDrink}</h2>
                        
                            </div>
                        )
                    })}
                </div>
            :
                <div>
                    <button onClick={()=>{indexPage()}}>Back</button>
                    <IndividualDrink drink={showDrink[0]}></IndividualDrink>
                </div>
            }
        </div>
    )
}
export default DrinkContainer