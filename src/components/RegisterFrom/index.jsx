import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './RegisterElements.css';
import { AiOutlineUserAdd, AiOutlineMail, AiFillHome } from 'react-icons/ai';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { registerInitiate } from '../../Redux/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [state, setState] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  const { username, phone, email, password, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match. Please try again.');
      return;
    }
    dispatch(registerInitiate(email, password, username));
    setState({ email: '', username: '', password: '', passwordConfirm: '', phone: '' });
    toast.success('Registration successful!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <form className="fromR" onSubmit={handleSubmit}>
          <a className="Hbtn" href="/">
            {' '}
            <AiFillHome /> Back to Home
          </a>
          <h3 className="headingh3">Register Here 😁 </h3>
          <div className="form-holder">
            <span className="lnr lnr-user">
              {' '}
              <AiOutlineUserAdd />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={username}
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-phone-handset">
              {' '}
              <BsFillTelephonePlusFill />{' '}
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
              value={phone}
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-envelope">
              {' '}
              <AiOutlineMail />{' '}
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock">
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock">
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="passwordConfirm"
              onChange={handleChange}
              value={passwordConfirm}
              required
            />
          </div>
          <button className="Rbtn" type="submit">
            <span>Register</span>
          </button>

          <div className="haveAccount">
            already have an account?
            <Link className="link" to="signin">
              {' '}
              Sign In
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer /> {/* Add this component to render toast notifications */}
    </div>
  );
};

export default RegisterForm;
