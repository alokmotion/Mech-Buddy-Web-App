import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd, AiFillHome } from 'react-icons/ai';
import { forgotPasswordInitiate } from '../../Redux/action';

const Forget = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(forgotPasswordInitiate(email));
      setEmail('');
    } else {
      console.error('Please enter your email address!');
    }
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <form className="fromR" onSubmit={handleResetPassword}>
          <a className="Hbtn" href="/">
            <AiFillHome /> Back to Home
          </a>
          <h3 className="headingh3">Forget Password</h3>
          <div className="form-holder">
            <span className="lnr lnr-envelope">
              <AiOutlineUserAdd />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Mail or Phone"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button className="Rbtn" type="submit">
            RESET
          </button>
          <div className="signup1">
            Don't have an account yet?
            <Link className="link" to="signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
