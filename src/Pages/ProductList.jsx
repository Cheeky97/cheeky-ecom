import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styledComponents from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'


const Container = styledComponents.div``
const Title = styledComponents.h1`
    margin: 20px;
`
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styledComponents.div`
    margin: 20px;
`
const FilterText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styledComponents.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styledComponents.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        });
    }
    
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled >
                    Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled >
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="lowest">Price (lowest)</Option>
                    <Option value="highest">Price (highest)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
