import VarIngredients from "./variantIng"
import './indiDrink.css'
import CommentSection from "./comment"

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
            <CommentSection drink={props.drink} drinkComment={props.drinkComment}></CommentSection>
            </div>
        </div> 
    )
}

export default Variant