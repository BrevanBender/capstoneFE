import './ingredients.css'
const VarIngredients=(props)=>{
const fifteen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
return(
    <div className='vinfoCont'>
        <div className='ingList'>
            {fifteen.map((number)=>{
                const ingredient = `ingredient${number}`
                const measure = `measure${number}`
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
export default VarIngredients