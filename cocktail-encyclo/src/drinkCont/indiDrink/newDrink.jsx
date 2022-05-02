import react, {useState} from "react";
import FileBase64 from 'react-file-base64'
import './newdrink.css'
const NewDrink = (props)=>{
    const [showNew, setShowNew] = useState(false)
    const toggleNew = ()=>{
      setShowNew(!showNew)
    }
    const [ingNum, setIngNum] = useState([1])
    const fifteen= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const handleNumChange =(e)=>{
        let amount = fifteen.filter(number=> number <= e.target.value)
        console.log(amount)
        setIngNum(amount)
    }
    
    const[newDrink, setNewDrink] = useState({
        name: '',
        insructions: props.drink.strInstructions,
        ingredient1: props.drink.ingredients[0],
        ingredient2: props.drink.ingredients[1],
        ingredient3: props.drink.ingredients[2],
        ingredient4: props.drink.ingredients[3],
        ingredient5: props.drink.ingredients[4],
        ingredient6: props.drink.ingredients[5],
        ingredient7: props.drink.ingredients[6],
        ingredient8: props.drink.ingredients[7],
        ingredient9: props.drink.ingredients[8],
        ingredient10: props.drink.ingredients[9],
        ingredient11: props.drink.ingredients[10],
        ingredient12: props.drink.ingredients[11],
        ingredient13: props.drink.ingredients[12],
        ingredient14: props.drink.ingredients[13],
        ingredient15: props.drink.ingredients[14],
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
        image: '',
        glasstype: props.drink.strGlass,
        ratings:[],
        comments: [],
        originalid: props.drink.idDrink
        
    })
    const handleInputChange = (e)=>{
        setNewDrink({
            ...newDrink,
            [e.target.name]: e.target.value
        })
    }
    return(
    <div className="newDrink">
        {!showNew ?
        <button id="newButton" onClick={toggleNew}>+</button>
        :
        <div id="newform">
        <button id="closeNew" onClick={toggleNew}>X</button>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.createNewDrink(newDrink)
            setNewDrink({
                name: '',
        insructions: props.drink.strInstructions,
        ingredient1: props.drink.ingredients[0],
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
        image: '',
        glasstype: props.drink.strGlass,
        ratings:[],
        comments: [],
        originalid: props.drink.idDrink
            })
            setShowNew(false)
            }}>
            Drink Name: <input type='text' name="name" onChange={handleInputChange} value={newDrink.name}></input>
            <br />
            Insructions: <textarea type='text' name="insructions" onChange={handleInputChange} ></textarea>
            <br />
            <span>Number of Ingredients:</span> <input type='number'  name='numbOfIng' onChange={handleNumChange}></input>
            <br />
            <section id="dynamicFields">
                <div id="ingredients">
                    {ingNum.map((number)=>{ let ingName = `ingredient${number}`; return(<div><span>Ingredient {number}:</span> <input type='text'  name={ingName} onChange={handleInputChange} value={eval(`newDrink.${ingName}`)}></input>
                    <br /></div>)})}
                </div>
                <div id="measurements">
                    {ingNum.map((number)=>{ let meaName = `measure${number}`; return(<div><span>Measurement {number}:</span> <input type='text'  name={meaName} onChange={handleInputChange} value={eval(`newDrink.${meaName}`)}></input>
                    <br /></div>)})}
                </div>
            </section>
            <span>Image:</span> <FileBase64 multiple={false} onDone={({base64})=>setNewDrink({...newDrink, image: base64})} />
            <br />
            <button type="submit">Post!</button>
        </form>
        </div>
        }   
    </div>
    )
}
export default NewDrink