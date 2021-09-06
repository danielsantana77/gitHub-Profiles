import React from 'react'
import { useHistory } from 'react-router-dom'; // Com essa lib é possivel passar para outra tela


import {
    Container, 
    NumberContainer


} from './styles'


const UserNumbers = props => {

    const history = useHistory();
    const handleOnClick = route => history.push(route)


    return(

    <Container>

        <NumberContainer onClick= {() => handleOnClick('/repos')}>

            <h1>{props.repos}</h1>
            <h2>Repositórios</h2>


        </NumberContainer>


        <NumberContainer onClick= {() => handleOnClick('/followers')}>

            <h1>{props.followers}</h1>
            <h2>Seguidores</h2>
            
        </NumberContainer>
        
        
        <NumberContainer onClick = {() => handleOnClick('/following')}>

            <h1>{props.following}</h1>
            <h2>Seguindo</h2>
            
        </NumberContainer>

    </Container>

    )

    }


export default UserNumbers;