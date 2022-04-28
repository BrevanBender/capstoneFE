import Ingredients from "./ingredients"
import'./indiDrink.css'

const IndividualDrink = (props)=>{
    return(
        <div className="eachDrink">
            <h2>{props.drink.strDrink}</h2>
            <img src={props.drink.strDrinkThumb} className="drinkImage"></img>
            <Ingredients drink={props.drink}></Ingredients>
        </div>
    )
}
export default IndividualDrink