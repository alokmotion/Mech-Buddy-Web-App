import React,{useState,useEffect} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import './LogInElements.css'
import {AiOutlineMail,AiFillHome } from 'react-icons/ai'
import {RiLockPasswordLine } from 'react-icons/ri'
import { useDispatch ,useSelector} from 'react-redux';
import { loginInitiate } from '../../Redux/action';



const Login = () => {

  const [state , setState] = useState({
    email: "",
    password:"",
  });

  const{email,password}  = state; 
  const {currentUser} = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(()=> {
    if(currentUser) {
      history.push("/");
    }

  }, [currentUser,history])


  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email || !password){
      return;
    }
    dispatch(loginInitiate(email,password));
    setState({email:"", password:""});

  };
  const handleChange =(e) =>{
    let{name,value} = e.target;
    setState({...state, [name]: value});
  };
  

  return (
    <div className="wrapper">
      <div className="inner">
        <form className='fromR' onSubmit={handleSubmit} action="">
        <a className='Hbtn' href="/"> <AiFillHome /> Back to Home</a>
          <h3 className='headingh3'> Log In </h3>
          <div className="form-holder">
            <span className="lnr lnr-envelope"> <AiOutlineMail /> </span>
            <input 
            type="email" 
            name='email'
            className="form-control"
            placeholder="Email Address" 
            onChange={handleChange}
            value ={email}
            required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"><RiLockPasswordLine /></span>
            <input 
            type="password" 
            name='password'
            className="form-control" 
            placeholder="Password"
            onChange={handleChange}
            value ={password}
            required

              
            />
          </div>
          <div className='forgetpass' >
          <Link className='link' to="forgetpass" >Forgot Password?</Link>
          </div>

          <button   
          className='Rbtn'
          type='submit'
          
          >
            <span>Log In</span>
          </button>

          <div className='signup1' > Don't have an account yet?  
          <Link className='link' to="signup" > Sign Up</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
