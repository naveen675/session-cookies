import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';


function Profile() {

    const navigate = useNavigate();

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname]= useState('');


    const data = {
            'firstname' : firstname,
            'lastname' : lastname
        }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    const Update = () => {

        const updateUrl = '/api/api/users/me/';

       

        fetch(updateUrl,requestOptions).then((response) => {
            console.log(response.status);
            if(response.status === 200){
                alert('Update Successful');
            }
            else{
                alert('Update Unsuccessfull');
            }
        })
    }

    const Logout = () => {

        
         const requestOptions = {

        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }

        const deleteUrl = '/api/api/sessions/me'

        fetch(deleteUrl,requestOptions).then((response) => {
            if(response.status === 204){
                
               navigate('/'); 
            }
            else{
                alert('Internal Error');
            }
        })


    }





  return (
    <div>
      <h1>Profile Page</h1>



       <label>Firstname</label>
        <input type='text' value={firstname} onChange={(event) => {setFirstname(event.target.value)}}></input><br></br>
        <label>Lastname</label>
        <input type='text' value={lastname} onChange={(event) => {setLastname(event.target.value)}}></input>
        <br></br>
        <button onClick={Update}>Update</button><button onClick={Logout}>Logout</button>

    </div>
  )
}

export default Profile
