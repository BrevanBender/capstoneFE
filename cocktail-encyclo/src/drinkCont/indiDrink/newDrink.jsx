import react, {useState} from "react";
import FileBase64 from 'react-file-base64'

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
        insructions: '',
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
        ingredient5: '',
        ingredient6: '',
        ingredient7: '',
        ingredient8: '',
        ingredient9: '',
        ingredient10: '',
        ingredient11: '',
        ingredient12: '',
        ingredient13: '',
        ingredient14: '',
        ingredient15: '',
        measure1: '',
        measure2: '',
        measure3: '',
        measure4: '',
        measure5: '',
        measure6: '',
        measure7: '',
        measure8: '',
        measure9: '',
        measure10: '',
        measure11: '',
        measure12: '',
        measure13: '',
        measure14: '',
        measure15: '',
        image: '',
        glasstype: '',
        ratings:[],
        comments: [],
        
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
        insructions: '',
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
        ingredient5: '',
        ingredient6: '',
        ingredient7: '',
        ingredient8: '',
        ingredient9: '',
        ingredient10: '',
        ingredient11: '',
        ingredient12: '',
        ingredient13: '',
        ingredient14: '',
        ingredient15: '',
        measure1: '',
        measure2: '',
        measure3: '',
        measure4: '',
        measure5: '',
        measure6: '',
        measure7: '',
        measure8: '',
        measure9: '',
        measure10: '',
        measure11: '',
        measure12: '',
        measure13: '',
        measure14: '',
        measure15: '',
        image: '',
        glasstype: '',
        ratings:[],
        comments: [],
            })
            }}>
            <span>Number of Ingredients:</span> <input type='number'  name='numbOfIng' onChange={handleNumChange}></input>
            <br />
            {ingNum.map((number)=>{ let ingName = `ingredient${number}`; return(<div><span>Ingredient {number}:</span> <input type='text'  name={ingName} onChange={handleInputChange}></input>
            <br /></div>)})}
            <span>Nearest City:</span> <input type='text'  name='nearest'onChange={handleInputChange} value={newDrink.ingredient1}></input>
            <br />
            <span>Shot With:</span> <input type='text'  name='shotwith'onChange={handleInputChange} value={newDrink.insructions}></input>
            <br />
            <span>Caption:</span> <input type='text' name='caption' onChange={handleInputChange} value={newDrink.name}></input>
            <br />
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