import React, {useContext} from "react";

import Container from '../components/container';
import FollowingContainer  from "../components/followingContainer";

import {context} from '../context'


const Seguindo = props => {
    const ctx = useContext(context)

    return (

        <Container>
            <FollowingContainer login={ctx.userData?.login} seguindo={ctx?.seguindo} />
        </Container>

    )



    }

export default Seguindo