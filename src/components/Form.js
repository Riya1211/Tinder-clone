import {useState} from 'react';


function Form() {
const [person , setPerson] = useState({
    name: "",
    url: ""
});

let name,value;
const postData =(e) => {
        name = e.target.name;
        value = e.target.value;

        setPerson({...person, [name]: value});
}

const submitData = async (event) => {
    event.preventDefault();
    const {name , url} = person;
    const res = await fetch(
        'https://tinder-weekend-clone-1f406-default-rtdb.asia-southeast1.firebasedatabase.app/personDataRecord.json', 
        {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
             body:JSON.stringify({
                name ,
                url
             })
        } 
    )
	if(res){
        setPerson({
            name: "",
            url: ""
        });
        alert("Data Stored");
    } 
    else{
        alert("please fill the data");
    }
}

return (
    <form method='POST'>
        <div className="form" style={{marginTop : 250}}>
            <center>
            <input placeholder="Enter your name" name="name" value={person.name}
            onChange={postData}/>
            <br/><br/>
            <input placeholder="Paste the URL" name="url" value={person.url}
            onChange={postData}/>
            <br/><br/>
            <button onClick={submitData}>PUSH</button>
            </center>
        </div>
    </form>
);
}

export default Form;
