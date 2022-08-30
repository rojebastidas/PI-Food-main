import React from 'react';
//import styled from 'styled-components';
import styled from "styled-components"

export const InputStyled = styled.input`
  background: #8ec667;
    font-size: 1em;
  margin: 1em;
  padding: 2px 4px;
  border: 2px solid #09f;
  border-radius: 4px;

  &:focus{
    background:#e0e468;
    border-color: black;
  }
  `
  export const InputStyled1 = styled.input`
  background: #8ec667;
  font-size: 1em;
  margin-left: 180px;
  margin-right: 10em;
  margin-top: 1em;
  width:800px;
  padding: 2px 4px;
  border: 2px solid #09f;
  border-radius: 4px;
  display: block;

  &:focus{
    background:#e0e468;
    border-color: black;
  }
  `
  /*export const BotonStyled1 = styled.button`
  background: green;
  
  font-size: 1em;
  margin: 1em;
  padding: 4px 12px;
  border: 3px solid #09f;
  border-radius: 8px;

  &:hover{
    background: #09f;
    border-color: black;
  }
  `*/