import React from 'react';
//import styled from 'styled-components';
import styled from "styled-components";

export const SelectStyled = styled.select`
  background: yellow;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 4px 12px;
  border: 3px solid #09f;
  border-radius: 8px;

  &:hover{
    background: #09f;
    border-color: black;
  }
  `

  export const SelectStyled1 = styled.select`
  background: yellow;
  cursor: pointer;
  font-size: 1em;
  margin-top: 4px;
  margin-left: 11em;
  width:400px;
  padding: 4px 12px;
  border: 3px solid #09f;
  border-radius: 8px;
  display: block;

  &:hover{
    background: #09f;
    border-color: black;
  }
  `
//   export const BotonStyled1 = styled.button`
//   background: green;
  
//   font-size: 1em;
//   margin: 1em;
//   padding: 4px 12px;
//   border: 3px solid #09f;
//   border-radius: 8px;

//   &:hover{
//     background: #09f;
//     border-color: black;
//   }
//   `