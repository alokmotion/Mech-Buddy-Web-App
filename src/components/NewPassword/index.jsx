import React from 'react';
// import { Link } from 'react-router-dom';
import '../RegisterFrom/RegisterElements.css'
import {AiFillHome } from 'react-icons/ai'
import {RiLockPasswordLine } from 'react-icons/ri'


const NewPassword = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <form className='fromR' action="">
        <a className='Hbtn' href="/"> <AiFillHome /> Back to Home</a>
          <h3 className='headingh3'> Set Password  </h3>
 
          <div className="form-holder">
            <span className="lnr lnr-lock"><RiLockPasswordLine /></span>
            <input type="password" className="form-control" placeholder="New Password" />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"><RiLockPasswordLine /></span>
            <input type="password" className="form-control" placeholder="Confirm Password" />
          </div>
          <button className='Rbtn'>
            <span>Submit</span>
          </button>


          {/* <div className="haveAccount"> already have an account?
           <Link className='link' to="signin"> Sign In</Link>
          </div> */}

        </form>
      </div>
    </div>
  );
};

export default NewPassword;
