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
            convertDrink.idDrink = drink.idDrink
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
    const updateFilter = (e)=>{
        const filterArray = desiredDrink.filter((drink)=>{
            let i = 0
            drink.ingredients.forEach((ing)=>{
                if(ing){
                if(ing.includes(e.target.value)){
                    i++
                }
            }})
            if(i){return drink}
        })
        console.log(filterArray)
        setDesiredDrink(filterArray)
    }
    return(
        <div>
            {showDrink.length === 0?
            <div>
                <input type='text' onChange={updateFilter}></input><button onClick={convertDrinks}>All Drinks</button>
                <div className="index">
                    {desiredDrink.map((drink, index)=>{
                        return(
                            <div className="ogdrink" onClick={()=>{drinkPage(drink)}}>
                                <img src={drink.strDrinkThumb} className="drinkImage"></img>
                                <h2>{drink.strDrink}</h2>
                        
                            </div>
                        )
                    })}
                </div>
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