import { useState } from "react"


const RatingSection =(props)=>{
    const [showRating, setShowRating]= useState(false)
    const[ratingDrink, setRatingDrink] = useState({
        name: props.drink.name,
        insructions: props.drink.strInstructions,
        ingredient1: props.drink.strIngredient1,
        ingredient2: props.drink.strIngredient2,
        ingredient3: props.drink.strIngredient3,
        ingredient4: props.drink.strIngredient4,
        ingredient5: props.drink.strIngredient5,
        ingredient6: props.drink.strIngredient6,
        ingredient7: props.drink.strIngredient7,
        ingredient8: props.drink.strIngredient8,
        ingredient9: props.drink.strIngredient9,
        ingredient10: props.drink.strIngredien10,
        ingredient11: props.drink.strIngredien11,
        ingredient12: props.drink.strIngredien12,
        ingredient13: props.drink.strIngredien13,
        ingredient14: props.drink.strIngredien14,
        ingredient15: props.drink.strIngredien15,
        measure1: props.drink.strMeasure1,
        measure2: props.drink.strMeasure2,
        measure3: props.drink.strMeasure3,
        measure4: props.drink.strMeasure4,
        measure5: props.drink.strMeasure5,
        measure6: props.drink.strMeasure6,
        measure7: props.drink.strMeasure7,
        measure8: props.drink.strMeasure8,
        measure9: props.drink.strMeasure9,
        measure10: props.drink.strMeasure10,
        measure11: props.drink.strMeasure11,
        measure12: props.drink.strMeasure12,
        measure13: props.drink.strMeasure13,
        measure14: props.drink.strMeasure14,
        measure15: props.drink.strMeasure15,
        image: props.drink.image,
        glasstype: props.drink.strGlass,
        ratings: props.drink.ratings,
        comments: props.drink.comments,
        originalid: props.drink.idDrink
        
    })
    const handleRatingChange = (e)=>{
        
        setRatingDrink({
            ...ratingDrink,
            ratings: [e.target.value, ...props.drink.ratings]
        })
    }
    const submitRating = (e)=>{
        e.preventDefault()
        props.drinkComment(props.drink._id, ratingDrink)
        setShowRating(false)
    }
    const toggleRatings = (e)=>{
        e.preventDefault()
        setShowRating(!showRating)
    }
    
    return(
        <div>
            {showRating?
                <div id="ratings">
                    <form onSubmit={submitRating}>
                        <input type="number" max='5' onChange={handleRatingChange}/>
                        <button type="submit"></button>
                    </form>                         
                
                </div>
            :
            <button onClick={toggleRatings}>Rate This</button>
            }
        </div>
    )
}
export default RatingSection