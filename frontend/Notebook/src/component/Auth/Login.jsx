import React, {useState}from 'react'
import Navbar from '../Navbar'
import { useNavigate } from "react-router-dom";

function Login() { 
    const [credentials, setCredentials] = useState({email:'', password:''})
    const navigate = useNavigate();

    const handleClick = async (e) =>{
        e.preventDefault();   
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authtoken)
            navigate("/");
        }else{
            alert('please enter valid credentials')
            
        }
    }

    const onChange = (e) => {
         setCredentials({...credentials, [e.target.name]: e.target.value})
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleClick}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100vh',  }}>
                    <div style={{ width: '800px',  padding: '20px', borderRadius: '20px'  }}>
                        <div className="form-group my-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credentials.email} placeholder="Enter email" name='email' onChange={onChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" name='password' id="password" placeholder="Password" value={credentials.password} onChange={onChange}   />
                        </div>      
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
