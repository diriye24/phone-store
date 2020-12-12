import styled from 'styled-components';
import './Navbar.css';

export const ButtonContainer = styled.button`
text-transform: capitalize;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: .5rem;
padding: 0.2rem .5rem;
cursor: pointer;
margin: .2rem .5rem .2rem 0;
transition: all .3s ease-in-out;
&:hover{
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: black;
}
`;