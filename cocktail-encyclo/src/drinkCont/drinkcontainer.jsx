import { useState } from "react"
import drinks from '../drinks';
import IndividualDrink from "./indiDrink/indiDrink"

const DrinkContainer = ()=>{
    const[showAll, setShow] = useState(true)
    const[showDrink, setShowDrink] = useState([])
    const drinkPage = (idx)=>{
        console.log(idx)
        console.log(drinks[idx])
        setShowDrink([
            drinks[idx]
        ])
    }
    const indexPage =()=>{
        setShowDrink([])
    }
    return(
        <div>
            <h1>hey</h1>
            {showDrink.length === 0?
                drinks.map((drink, index)=>{
                    return(
                        <div className="ogdrink" onClick={()=>{drinkPage(index)}}>
                            <h2>{drink.strDrink}</h2>
                            <img src={drink.strDrinkThumb} className="drinkImage"></img>
                    
                        </div>
                    )
                })
            :
                <IndividualDrink drink={showDrink[0]}></IndividualDrink>
            }
        </div>
    )
}
export default DrinkContainer