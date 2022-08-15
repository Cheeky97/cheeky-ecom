import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styledComponents from 'styled-components'
import {mobile} from '../Responsive'

const Container = styledComponents.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styledComponents.h1``
const Desc = styledComponents.p`
    margin: 20px 0px;
`
const SocialContainer = styledComponents.div`
    display: flex;
    
`
const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
`
const Title = styledComponents.h3`
    margin-bottom: 30px;
`
const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styledComponents.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>CHEEKY.</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/> 1 Dukes road, Barkingside, London</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/> +44 7407716171 </ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/> contact@cheeky.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
