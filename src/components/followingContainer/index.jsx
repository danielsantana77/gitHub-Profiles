
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';


const FollowingContainer = props => {
    
  /* const history = useHistory();
    const handleOnClick = route => history.push(route) */

    return (
        <Section>
            <Title>Devs que sigo</Title>
            <ListOfReposContainer>
                {(props?.seguindo).map(repo => (
                    <Repo onClick={() => window.location.href=(repo?.html_url)}  key={repo?.id}>
                        <h2>{repo?.login}</h2>
                        
                       
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default FollowingContainer;