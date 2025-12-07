import React ,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    console.log("uppercase was clicked" + text);
    let newtext= text.toUpperCase();
    setText(newtext)
  }
  const handleOnChange=(event)=>{
    console.log("ON changed");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter the text');
  //text=new text; #wrong way
  //setText=("new text"); #right way
  return (
    <div>  
       <h1>{props.Heading}</h1>  
       <div class="mb-2">
       <textarea className="form-control" value={text}id="mybox" onChange={handleOnChange} rows="12" ></textarea>
       </div>
       <button className='btn btn-success' onClick={handleUpClick} >conevert in Uppercase</button>
    </div>
  )
}