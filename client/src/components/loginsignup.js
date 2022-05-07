import React,{useState} from 'react'
import fetch from 'node-fetch';
import {useNavigate} from 'react-router-dom';


function Loginsignup() {

    const navigate = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword]= useState('');


    const data = {
            'username' : username,
            'password' : password
        }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    const ExistingUser = () => {

        const loginurl = '/api/api/users/session/';
        
        console.log(`${username} ${password}` );
        fetch(loginurl,requestOptions).then((res) => {

            if(res.status === 200){
                navigate('/profile');
            }
            else {
               alert('Login Unsuccessful');
               navigate('/');
            }
        }).catch((err) => {
            console.log(`Error in Login ${err}`)
        })
    }

    const NewUser = (  ) => {

            const SignupUrl = '/api/api/users/user';

            fetch(SignupUrl, requestOptions).then((response) => {
                if(response.status === 200 ){
                    alert('Account has Created. Click OK to Login');
                    navigate('/');
                }
                else{
                   alert('Account Creation error');
                   navigate('/');
                }
            }).catch((err) => {
                alert(`Error in Signig up ${err}`);
            })
    }


  return (
    <div>
        
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => {setUsername(event.target.value)}}></input><br></br>
        <label>Password</label>
        <input type='text' value={password} onChange={(event) => {setPassword(event.target.value)}}></input>
        <br></br>
        <button onClick={ExistingUser}>Login</button><button onClick={NewUser}>Signup</button>
    </div>
  )
}

export default Loginsignup