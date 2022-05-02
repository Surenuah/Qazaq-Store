import React from 'react'
import styled from "styled-components"
import { categories } from '../../data'
import { CategoriesItems } from '../CategoriesItems/CategoriesItems'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

export default function Categories() {
    return (
        <Container>
            {categories.map(item => (
                <CategoriesItems item={item}/>
            ))}
        </Container>
    )
}
