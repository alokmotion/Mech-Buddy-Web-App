import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    padding: 24px;
    font-size: 22px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid gray;
    color: #000;
    z-index:1000;
    cursor: pointer;


&::before {
    content: '';
    position: absolute;
    top: -0.7rem;
    right: 1.1rem;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    border-left: 1px solid gray;
    border-top: 1 px solid gray;
}


`


export const UnorderList = styled.ul`
cursor: pointer;

`

export const ListItme = styled.li`
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    line-height: 41pt;
    width: max-content;
    color:black;

    

`


