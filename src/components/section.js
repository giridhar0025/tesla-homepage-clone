import React from 'react'
import styled from 'styled-components' /* To make styled components in react */
import Fade from 'react-reveal/Fade'



function Section({ item }) {
    return (
        <Wrap bgImage={item.image}> {/* Passing images as props to the Wrap styled Component*/}
            <Fade bottom>
            <ItemText>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </ItemText>
            </Fade>
            <Buttons>
                
                <ButtonGroup>
                <Fade left>
                    <LeftBtn>
                        {item.LeftBtnText}
                    </LeftBtn>
                </Fade>
                    {/* Here we are giving condition if the item.RightBtnText is "true" that means if present in props data then only the right button will be rendered */}
                    { item.RightBtnText && 
                       <Fade right>
                       <RightBtn>
                       {item.RightBtnText}
                       </RightBtn>
                       </Fade>
                    }
                </ButtonGroup>
                
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
     width: 100vw;
     height: 100vh;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-image: url('/images/model-s.jpg');
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     background-image: ${item => `url("/images/${item.bgImage}")`}
`


const ItemText = styled.div`
     Padding-top: 15vh;
     text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    cursor: pointer;
    @media (max-width: 768px) {
        flex-direction: column
    }

`

const LeftBtn = styled.div`
    background-color: #171a20;
    opacity: 80%;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 2px inset;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightBtn = styled(LeftBtn)`
    background-color: #f4f4f4;
    opacity: 65%;
    color: #393c41;
`

const DownArrow = styled.img`
  
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`


const Buttons = styled.div`
    
`

