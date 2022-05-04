import {useState} from 'react';
import db from '../firebase';

function Form() {
const [name , setName] = useState("");
const [url , setUrl] = useState("");

const submitData = (event) => {
    event.preventDefault();
    if(name && url){

        const data = db.collection("people").add({
            name: name,
            url: url,
          });
    
          if(data){
            setName("");
            setUrl("");
            alert("Data Stored");
        } 
        else{
            alert("please fill the data");
        }
    }
    else{
        alert("please fill the data");
    }
    
}

return (
    <form method='POST'>
        <div className="form" style={{marginTop : 250}}>
            <center>
            <input placeholder="Enter your name" name="name" value={name}
            onChange={(e) => setName(e.target.value)}/>
            <br/><br/>
            <input placeholder="Paste the URL" name="url" value={url}
            onChange={(e) => setUrl(e.target.value)}/>
            <br/><br/>   
            <button onClick={submitData}>PUSH</button>
            </center>
        </div>
    </form>
);
}

export default Form;
