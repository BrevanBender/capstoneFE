import Ingredients from "./ingredients"


const IndividualDrink = (props)=>{
    return(
        <div>
            <h2>{props.drink.strDrink}</h2>
            <img src={props.drink.strDrinkThumb} className="drinkImage"></img>
            <Ingredients drink={props.drink}></Ingredients>
        </div>
    )
}
export default IndividualDrink