import React from 'react';
//import styled from 'styled-components';
import styled from "styled-components"

export const LabelStyled = styled.label`
  background: green;
  margin: 1em;
  padding: 2px 2px;
  border: 2px solid #09f;
  border-radius: 4px;
  font-size: 10px

  &:hover{
    background: #09f;
    border-color: black;
  }
  `