import React, { useState } from 'react'
import axios from 'axios';

const PersonForm = (props) => {
    const {people, setPeople} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]= useState("");
    // the handler when the form is submitted
    const onSubmitHandler =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setPeople([...people, res.data]);// this will update the lifted state of our people array and add in values
            })
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type='text' onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} />
            </p>
            <input type="submit"/>
        </form>
    )
}
// const PersonForm= () => {
//     const [ message, setMessage ] = useState('Loading...')
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api')
//             .then(res=>setMessage(res.data.message))
//             .catch(err=>console.log(err))
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }

export default PersonForm;