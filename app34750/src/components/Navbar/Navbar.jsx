import React, {} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {

  return (
    <>
      <NavContainer><Link to='/'>
        <h2>Books from <span>React</span></h2></Link>
        <div>
          <a href='/category/thriller'>Thriller</a>
          <a href='/category/lirico'>Lírico</a>
          <a href='/category/literario'>Literario</a>
          <Link to="/cart"><CartWidget/></Link>
        </div>
      </NavContainer>
    </>
  )
}

export default Navbar;

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }`
