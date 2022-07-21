import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Section from "./section";



function Home() {

  const [carsData, setCarsData] = useState([])

  useEffect(() => {
    fetch("https://api.npoint.io/c373c4b08894f2ee962f")
    .then(res => res.json())
    .then(vehicleData => {
     
      setCarsData(vehicleData.Cars)
    })
  }, [])
  

  return (
    <Container>
      {
        carsData.map((item, index) => (
          <Section item={item}/>
        ))
      }
        
    </Container>
  )
}

export default Home


const Container = styled.div`
       height: 100vh;

       `
          
