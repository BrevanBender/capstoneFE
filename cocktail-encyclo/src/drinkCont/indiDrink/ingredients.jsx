import './ingredients.css'
const Ingredients=(props)=>{

return(
    <div className='infoCont'>
        <div className='ingList'>
            {props.drink.ingredients.map((ing, index)=>{
                if (ing){
               
                    return(
                        
                            <div className="ingredients">
                                {eval(`props.drink.measures[${index}]`)?
                                <h6>{eval(`props.drink.measures[${index}]`)}</h6>
                                :
                                <></>
                                }
                                
                                <h6>{ing}</h6>
                                
                                <></>
                                
                                
                            </div>
                        
                            
                        )
                }
            })
            }
        </div>
        <p>{props.drink.strInstructions}</p>
    </div>
)
}
export default Ingredients