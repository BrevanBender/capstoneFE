
const Ingredients=(props)=>{
const ingredients = ['strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient5', 'strIngredient6', 'strIngredient7', 'strIngredient8', 'strIngredient9', 'strIngredient10', 'strIngredient11', 'strIngredient12', 'strIngredient13', 'strIngredient14', 'strIngredient15']
const meaures = ['strMeasure1', 'strMeasure2', 'strMeasure3', 'strMeasure4', 'strMeasure5', 'strMeasure6', 'strMeasure7', 'strMeasure8', 'strMeasure9', 'strMeasure10', 'strMeasure11', 'strMeasure12', 'strMeasure13', 'strMeasure14', 'strMeasure15']
const fifteen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
return(
    <div>
        {fifteen.map((number)=>{
            const ingredient = `strIngredient${number}`
            const measure = `strMeasure${number}`
            return(
                    <div className="ingredients">
                    <h6>{eval(`props.drink.${measure}`)}</h6>
                    <h6>{eval(`props.drink.${ingredient}`)}</h6>
                    </div>
                )
        })
        }
    </div>
)
}
export default Ingredients