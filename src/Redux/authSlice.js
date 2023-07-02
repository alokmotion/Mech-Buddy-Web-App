import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: false,
    error: "",
}


export const signupUser = createAsyncThunk('signupUser', async(body)=>{
    const res = await fetch("AIzaSyCIrLyheFPiySdMjQFr6MFPSJUksLPP8pM", {
        method: "post",
        headers:{
            'Content-Type' : "application/json",
        },

        body: JSON .stringify(body)
    })
    return await res.json();
})

export const signinUser = createAsyncThunk('signinUser', async(body)=>{
    const res = await fetch("AIzaSyCIrLyheFPiySdMjQFr6MFPSJUksLPP8pM", {
        method: "post",
        headers:{
            'Content-Type' : "application/json",
        },

        body: JSON .stringify(body)
    })
    return await res.json();
})


export const forgetPassword = createAsyncThunk('forgetPassword', async (email) => {
    const res = await fetch("AIzaSyCIrLyheFPiySdMjQFr6MFPSJUksLPP8pM", {
      method: "post",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ email })
    });
    return await res.json();
  });
  


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

        addToken: (state,action) =>{
            state.token = localStorage.getItem("token")
        },
        addUser: (state,action) =>{
            state.token = localStorage.getItem("user")
        },
        logout: (state,action) =>{
            state.token = null;
            localStorage.clear();
        },

    },

    extraReducers:{
        // Login
        [signinUser.pending] : (state, action)=>{
            state.loading = true
        },
        [signinUser.fulfilled] : (state,{payload:{error,msg,token,user}})=> {
            state.loading = false
            if(error){
                state.error = error;

            }else{
                state.msg= msg;
                state.token=token;
                state.user = user;

                localStorage.setItem('msg',msg)
                localStorage.setItem('user',JSON.stringify(user) )
                localStorage.setItem('token',token)

            }


        },
        [signinUser.rejected] : (state, action)=>{
            state.loading = true
        },

        // ****************   Signin  ************************
        [signupUser.pending] : (state, action)=>{
            state.loading = true
        },
        [signupUser.fulfilled] : (state,{payload:{error,msg}})=> {
            state.loading = false
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [signupUser.rejected] : (state, action)=>{
            state.loading = true
        },


        // forgot password


        [forgetPassword.pending]: (state, action) => {
            state.loading = true;
          },
          [forgetPassword.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false;
            if (error) {
              state.error = error;
            } else {
              state.msg = msg;
            }
          },
          [forgetPassword.rejected]: (state, action) => {
            state.loading = true;
          },
          

    }

})

export const {addToken,addUser,logout} = authSlice.actions;
export default authSlice.reducer