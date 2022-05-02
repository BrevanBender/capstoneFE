import VarIngredients from "./variantIng"
import './indiDrink.css'
import CommentSection from "./comment"
import RatingSection from "./ratings"

const Variant = (props)=>{
    const averageRating =(arr)=>{
        let total = 0
        for(let rating of arr){
            total = total + Number(rating)
        }
        const av = total / (arr.length)
        console.log(av)
        return av
    }

    return(
        <div className="variantDrink">
            <h3> {props.drink.name}</h3>
            <div>
                {props.drink.image?
                <img className='vImg'src={props.drink.image} alt="" />
                :
                <></>
            }
            <VarIngredients drink={props.drink}></VarIngredients>
            {props.drink.ratings.length?
                <h5>{averageRating(props.drink.ratings)}/5</h5>
                :
                <h5> -/5 </h5>
            }
            <p>{props.drink.insructions}</p>
            <RatingSection drink={props.drink} drinkComment={props.drinkComment}></RatingSection>
            <CommentSection drink={props.drink} drinkComment={props.drinkComment}></CommentSection>
            </div>
        </div> 
    )
}

export default Variant