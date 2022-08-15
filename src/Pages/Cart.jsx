import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import {mobile} from '../Responsive'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'



const Container = styledComponents.div`

`
const Wrapper = styledComponents.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styledComponents.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styledComponents.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styledComponents.div`
    ${mobile({ display: "none" })}
`
const TopText = styledComponents.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styledComponents.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styledComponents.div`
    flex: 3;
`
const Product = styledComponents.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styledComponents.div`
    flex: 2;
    display: flex;
`
const Image = styledComponents.img`
    width: 200px;
`
const Details = styledComponents.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styledComponents.span`

`
const ProductId = styledComponents.span`

`
const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styledComponents.span`

`

const PriceDetail = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styledComponents.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styledComponents.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styledComponents.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styledComponents.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styledComponents.h1`
    font-weight: 200;
`
const SummaryItem = styledComponents.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
    
`
const SummaryItemText = styledComponents.span``
const SummaryItemPrice = styledComponents.span``
const Button = styledComponents.button`
    width: 100%;
    padding: 10px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: black;
        color: white;
    }

`

const Cart = () => {

    const navigate = useNavigate();
    const cart = useSelector(state=> state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect(()=>{
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment",{
                        tokenId: stripeToken.id,
                        amount: cart.total
                    });
                navigate("/success", {state:{stripeData: res.data, orderData: cart}});
            } catch(err){
                console.log(err);
            }
            
        }
        stripeToken && makeRequest();
        
    },[stripeToken, cart, navigate]);

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    { cart.product.map((p,index)=> (
                        <Product key={index}>
                            <ProductDetail>
                                <Image src={p.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {p.title}</ProductName>
                                    <ProductId><b>ID:</b> {p._id}</ProductId>
                                    <ProductColor color={p.color}/>
                                    <ProductSize><b>SIZE:</b> {p.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{p.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {p.price*p.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                     ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5</SummaryItemPrice>
                    </SummaryItem> 
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="CHEEKY Shop"
                        image="https://avatars.githubusercontent.com/u/1486366?v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey="pk_test_51L05rZHBwns1ghZxlJZAH3I2DneeRf9FAyrgs8naboYyyqYiVuFKwUeVc3ouK5P72Nk4bks2hkFn77uPFiHoKxdZ003Ug3dBtS"
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
