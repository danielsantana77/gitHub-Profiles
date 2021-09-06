import { FiSearch } from 'react-icons/fi';
import React,{useState, useContext} from 'react';
import client from '../../services/client'



import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import {context} from '../../context'

const Header = () => {
    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('');

    async function getUserData(){
        try{
            const response = await client.get(`/${searchedValue}`)
            const repos = await client.get(`/${searchedValue}/repos`)
           const follow = await client.get(`/${searchedValue}/followers`)
           const seguindo = await client.get(`/${searchedValue}/following`)
            
            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
            ctx.setFollow(follow.data)
            ctx.setSeguindo(seguindo.data)
            
        }catch(err){
            
            console.log(err)
        }
    }
    return (
    
    <HeaderSection> {console.log(ctx)}
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchedValue} onChange ={e => setSearchedValue(e.target.value) } />
            
            <HeaderSearchButton onClick={getUserData} >
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>

    )
};

export default Header;