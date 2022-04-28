import { useState } from "react"
import drinks from '../drinks';
import IndividualDrink from "./indiDrink/indiDrink"
import './drinkCont.css'

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
            {showDrink.length === 0?
                <div className="index">
                    {drinks.map((drink, index)=>{
                        return(
                            <div className="ogdrink" onClick={()=>{drinkPage(index)}}>
                                <h2>{drink.strDrink}</h2>
                                <img src={drink.strDrinkThumb} className="drinkImage"></img>
                        
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