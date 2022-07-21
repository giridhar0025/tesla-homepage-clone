import React, {useState} from 'react'
import styled from 'styled-components'
import HeadShake from 'react-reveal/HeadShake';


function Header() {

  const  [menuStyle, setMenuStyle] = useState("close")

  function handleToggleOff() {
    setMenuStyle("close")
  }

  function handleToggleOn() {
    setMenuStyle("open")
  }


  return (
    <Container>
      <navbar>
        <div>
          <img style={{ marginTop:"3px", marginLeft: "30px", position: "fixed", width: "120px", height: "40px" }} src="./images/logo.svg" alt="" />
        </div>
        <div className='Nav-cars'>
          <p className='moreDetails'><a href="/">Model S</a></p>
          <p className='moreDetails'><a href="/">Model 3</a></p>
          <p className='moreDetails'><a href="/">Model X</a></p>
          <p className='moreDetails'><a href="/">Model Y</a></p>
          <p className='moreDetails'><a href="/">Solar Panel</a></p>
          <p className='moreDetails'><a href="/">Solar Roof</a></p>
        </div>
        <div className='Nav-shop'>
          <p className='moreDetails2'><a href="/">Shop</a></p>
          <p className='moreDetails2'><a href="/">Account</a></p>
          <p className='moreDetails2'><a href="/">Menu</a></p>
          <div onClick={handleToggleOn} className='menu-toggle-off'>
            <span class="material-symbols-outlined">
              menu
            </span>
          </div>
          
          <div className={menuStyle}>
          <div className='menu-toggle-on'>
          <div onClick={handleToggleOff}  className='toggle-off-btn'>
          <span class="material-symbols-outlined">close</span>
          </div>
          <HeadShake>    
            <li className='list-items'><a href="/">Model S</a></li>
            <li className='list-items'><a href="/">Model 3</a></li>
            <li className='list-items'><a href="/">Model X</a></li>
            <li className='list-items'><a href="/">Model Y</a></li>
            <li className='list-items'><a href="/">Solar Roof</a></li>
            <li className='list-items'><a href="/">Solar Panels</a></li>
            <li className='list-items'><a href="/">Existing Inventory</a></li>
            <li className='list-items'><a href="/">Used Inventory</a></li>
            <li className='list-items'><a href="/">Trade-In</a></li>
            <li className='list-items'><a href="/">Test Drive</a></li>
            <li className='list-items'><a href="/">Insurance</a></li>
            <li className='list-items'><a href="/">Powerwall</a></li>
            <li className='list-items'><a href="/">Commercial Energy</a></li>
            <li className='list-items'><a href="/">Find Us</a></li>
            <li className='list-items'><a href="/">Support</a></li>
            <li className='list-items'><a href="/">Investor Relations</a></li>
            <li className='list-items'><a href="/">Shop</a></li>
            <li className='list-items'><a href="/">Account</a></li>
            </HeadShake>
          </div>
          </div>
        </div>

      </navbar>
    </Container>

  )
}

export default Header


const Container = styled.div`
  min-height: 30px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
`

//  const Menu = styled.div`
  
 
//  `

// const BurgerContainer = styled.div`
  
// `