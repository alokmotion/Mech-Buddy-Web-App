import styled from 'styled-components';



export const Container = styled.div`

    background-color: #fafafa;
    

`;


export const ContactWrapper = styled.div`

    position: relative;
    min-height: 100vh;
    width: 100% auto;
    
    padding: 2rem;
    background-color: #fafafa;
    
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 480px){
    padding: 0;
    width: auto;
    overflow: visible;
    }

`

export const FormWrapper = styled.div`
 width: 100%;
  max-width: 820px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  ${'' /* z-index: 1000; */}
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);


  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    width: auto;
    height: auto;
  }
`


export const ContactInfo = styled.div`
    padding: 2.3rem 2.2rem;
    position: relative;



    @media screen and (max-width: 480px){

padding: 1.7rem 1rem;

}
`


export const Title = styled.h3`
  color: #1abc9c;

  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
`


export const Text = styled.p`
     color: #333;
  margin: 1.5rem 0 2rem 0;


  @media screen and (max-width) {
    margin: 1rem 0 1.5rem 0;
  }
`


export const ContactInfoWrap = styled.div`

    display: flex;
    color: #555;
    margin: 0.7rem 0;
    align-items: center;
    font-size: 0.95rem;

    
    


`

export const Images = styled.img`
  width: 28px;
  margin-right: 0.7rem;
`




export const GoogleMap = styled.p`
    color: #333;
    

`

export const ContactForm = styled.div`

background-color: #1abc9c;
  position: relative;


  &:before{
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: #1abc9c;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
  }

`


export const FormTitle = styled.h2`
  color: #fff;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.3rem 2.2rem;
  overflow: hidden;
  position: relative;


  @media screen and (max-width: 480px){

    padding: 1.7rem 1.6rem;

  }
`;


export const FormGroup = styled.div`
position: relative;
  margin: 1rem 0;
  
`;


export const Label = styled.label`
display: flex;
  margin-left: 15px;
  margin-bottom: 3px;
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  top: 1rem;




  
`;

export const Input = styled.input`
padding: 0.5rem;
font-size: 1rem;
width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
`;

export const TextArea = styled.textarea`
font-size: 1rem;
width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  
`;



export const SubmitButton = styled.button`

padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #1abc9c;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
  

&:hover{
    background-color: transparent;
    color: #fff;
}



@media screen and (max-width: 480px) {
  padding: 0.45rem 1.2rem;

}

`
