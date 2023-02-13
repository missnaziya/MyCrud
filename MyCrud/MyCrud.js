import React,{useState} from 'react'

const MyCrud = () => {


const [input,setInput] = useState()
const [list,setList] = useState([])
const [edit,setEdit]  = useState(false)
const[i,seti] = useState("")

// const handleInput = (e) =>{
//   setInput(e.target.value)

// }

const addInput = () =>{

if(edit){
setList(
list.map((data,index)=>{
  if(index==i){
    return (data= input)
  }
})
)

}

else{
  setList([...list,input])
  setInput("")
   console.log(list)
}

}

const handleDelete = (id) => {
 setList(     list.filter((value,i)=>{
  return id != i
 }))
}

const handleEdit = (id) => {
  setEdit(true)
  seti(id)
setInput( list.filter((value,i)=>{
  return id == i
 }))



 }



  return (
    <div>MyCrud




      <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button onClick={addInput}>submit</button>

<table style={{border: '1px solid black'}} >
<tbody>
  <td>{ list.map((item,id)=>{
  return <p key={id}>
    <tr  style={{border: '1px solid black'}}> {id +1 }.  {item}  
   < button onClick={()=>{handleEdit(id)}}>Edit</button>
  <button onClick={()=>{handleDelete(id)}}>Delete</button>
  
  </tr>
  </p>
})

}
</td>
</tbody>



</table>

    </div>
  )
}

export default MyCrud