import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../Redux/action';
import {
  Container,
  UnorderList,
  ListItme,


} from "./LogoutbtnElement";

import { FaRegUser } from 'react-icons/fa/';
import { GrServices } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi'





const Logout = () => {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  }

  return (
    <>
      <Container >
        <UnorderList>
          <ListItme> <FaRegUser style={{ color: "#000" }} />  {currentUser ? currentUser.displayName : "username"} </ListItme>
          <ListItme> <GrServices />  Services</ListItme>
          <ListItme onClick={handleAuth}> <BiLogOut style={{ color: "#000" }} />  Log Out</ListItme>
        </UnorderList>
      </Container>






    </>
  );
};

export default Logout;



//  cerated by alokmotion 