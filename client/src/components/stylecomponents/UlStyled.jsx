import React from 'react';
//import styled from 'styled-components';
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
export const UlStyled = styled.ul`
  background-color: #e5e5e5;
  list-style:none;
   margin: 0;
  padding: 0;
 `
 export const UlStyled1 = styled.ul`
  background-color: #ccc;
  list-style:none;
   margin: 0;
  padding: 0;
 `
 export const LiStyled= styled.li`
   display:inline-block;
   font-size: 35px;
   
   
 `
 export const LiStyled1= styled.li`
   display:inline-block;
   font-size: 40px;
   padding-left: 10px;
    padding-right:20px;
    padding-top: 7px;
    padding-botton: 7px;
      
 `

 export const AStyled=styled.a`
    padding: 5px;
    margin: 4px;
    display: inline-block`

export const AStyled1=styled.a`
    
    margin: 7px;
    display: inline-block`   

export const NavLinkStyled= styled(NavLink)`
  text-decoration: none;
  font-size: 40px;
  align: left
  margin: 12px 22px; 
  &:hover{
    border-botom: 2px solid #ccc;
  }
`