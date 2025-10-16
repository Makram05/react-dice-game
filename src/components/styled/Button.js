import styled from "styled-components";

export const Button=styled.button`
  background-color: #C9A63D	;
  color: white;
  border: 1px solid transparent;
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  margin: 0 0 0 120px ;
  font-size: 16px;
  cursor: pointer;
  transition: 0.6s ease;

  &:hover{
    background-color: #DAA520;
    border: 1px solid black;
    color: #ffffff;
    transition: 0.5s ease ;
    font-weight: 600;
  }
`;

export const OutlineButton=styled(Button)`

    background-color: transparent;
    border:1px solid  #C9A63D;
`

