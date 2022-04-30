import './ingredients.css'
const Ingredients=(props)=>{
const fifteen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
return(
    <div className='infoCont'>
        <div className='ingList'>
            {fifteen.map((number)=>{
                const ingredient = `strIngredient${number}`
                const measure = `strMeasure${number}`
                const drinkIngredient = eval(`props.drink.${ingredient}`)
                const drinkMeasure = eval(`props.drink.${measure}`)
                if (drinkIngredient){
               
                    return(
                        
                            <div className="ingredients">
                                {drinkMeasure?
                                <h6>{eval(`props.drink.${measure}`)}</h6>
                                :
                                <></>
                                }
                                {drinkIngredient?
                                <h6>{eval(`props.drink.${ingredient}`)}</h6>
                                :
                                <></>
                                }
                                
                            </div>
                        
                            
                        )
                }
            })
            }
        </div>
        <p className='instr'>{props.drink.strInstructions}</p>
    </div>
)
}
export default Ingredients