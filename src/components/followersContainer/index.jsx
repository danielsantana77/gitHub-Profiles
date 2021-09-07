import {
    Section,
    Title,
    ListOfFollowersContainer,
    Repo
} from './styles';


const FollowersContainer = props => {

    return (

        <Section>
            <Title>Seguidores de {(props.login)?.split(' ')[0]}</Title>
            <ListOfFollowersContainer> 
                {(props?.follow).map(followers => (
                    <Repo onClick={() => window.location.href=(followers?.html_url)}  key={followers?.id}>
                    <img src ={followers?.avatar_url} />
                    <h2>{followers?.login}</h2>
                    
                    </Repo>



                ))}


            </ListOfFollowersContainer>

        </Section>

    )


}

export default FollowersContainer;