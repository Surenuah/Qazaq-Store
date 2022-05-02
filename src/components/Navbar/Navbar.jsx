import { Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Container = styled.div`
   height: 55px;
   font-size: 14px;
   align-items: center;
`

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Left = styled.div`
   flex:1;
   display: flex;
   align-items: center;
`;

const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
`;

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`

const Input = styled.input`
   border: none;
   &:focus{outline: none}

`

const Center = styled.div`
   flex: 1;
   text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

const MenuItem =styled.div`
   font-size: 14px;
   cursor: pointer;
   margin-left: 25px;
`

export default function () {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style = {{color:"grey", fontSize : 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Qazak-store
                    </Logo>
                </Center>
                <Switch>
                    <Right>
                        <MenuItem>
                            <Route path='signup' />
                        </MenuItem>
                        <MenuItem>
                            SIGN IN
                        </MenuItem>
                        <MenuItem>
                            <Badge badgeContent={80} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Right>
                </Switch>
            </Wrapper>
        </Container>
    )
}
