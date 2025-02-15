import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar'
import { useAlert } from '../../context/note/alert/alertContext';

function Signup() {
  const alert = useAlert()
  const [credentials, setCredentials] = useState({name:'',  email:'', password:''});
  const navigate = useNavigate();

  const handleClick = async (e) =>{
      e.preventDefault();   
      const {name, email, password} = credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({name, email, password})
      });
      const json = await response.json() 
        if(!json.success){
          alert.error('These user already exists try new email')
        }else{
          localStorage.setItem('token',json.auththoken);
          navigate('/login');
          alert.success('account created successfully')
        }
      
  }

  const onChange = (e) => {
       setCredentials({...credentials, [e.target.name]: e.target.value})
  };


  return (
    <div>
      <Navbar />  
      <form  onSubmit={handleClick}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100vh',  }}>
                    <div style={{ width: '800px',  padding: '20px', borderRadius: '20px'  }}>
                        <div className="form-group my-2">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp"   placeholder="Enter Name" name='name' onChange={onChange} required />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  placeholder="Enter email" name='email' onChange={onChange} required minLength={5} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" name='password' id="password" placeholder="Password" onChange={onChange} required minLength={5}  />
                        </div>      
                        <button  type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                </div>
            </form>
    </div> 
  )
}

export default Signup
