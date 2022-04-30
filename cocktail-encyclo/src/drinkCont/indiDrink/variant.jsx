import VarIngredients from "./variantIng"
import './indiDrink.css'

const Variant = (props)=>{
    return(
        <div className="variantDrink">
            <h3> {props.drink.name}</h3>
            <div>
                {props.drink.image?
                <img src={props.drink.image} alt="" />
                :
                <></>
            }
            <VarIngredients drink={props.drink}></VarIngredients>
            <p>{props.drink.insructions}</p>
            </div>
        </div> 
    )
}

export default Variant