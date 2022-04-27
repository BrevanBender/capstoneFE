

const IndividualDrink = (props)=>{
    console.log(props.drink)
    return(
        <div>
            <h2>{props.drink.strDrink}</h2>
            <img src={props.drink.strDrinkThumb} className="drinkImage"></img>
        </div>
    )
}
export default IndividualDrink