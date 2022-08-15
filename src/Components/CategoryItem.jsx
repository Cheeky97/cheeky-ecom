import {mobile} from '../Responsive'
import React from 'react'
import styledComponents from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styledComponents.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`
const Info = styledComponents.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styledComponents.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styledComponents.button`
    border: none;
    padding: 20px;
    backgroung-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.cat}`}>
                    <Button>SHOP NOW</Button>
                </Link> 
            </Info>
        
    </Container>
  )
}

export default CategoryItem
