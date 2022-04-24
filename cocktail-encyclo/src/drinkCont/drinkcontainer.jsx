import { useState } from "react"
import drinks from '../drinks';
import IndividualDrink from "./indiDrink/indiDrink"

const DrinkContainer = ()=>{
    const[showAll, setShow] = useState(true)
    return(
        <div>
            <h1>hey</h1>
            {showAll?
                drinks.map((drink)=>{
                    return(
                        <div className="ogdrink">
                            <h2>{drink.strDrink}</h2>
                            <img src={drink.strDrinkThumb} className="drinkImage"></img>
                    
                        </div>
                    )
                })
            :
                <IndividualDrink></IndividualDrink>
            }
        </div>
    )
}
export default DrinkContainer