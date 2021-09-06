import React, {useState, createContext} from 'react';


export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState ({});
    const [repos, setRepos] = useState ([]);
    const [follow, setFollow] = useState([]);
    const [seguindo, setSeguindo] = useState([]);

    return (

        <context.Provider value = {{
                userData,
                repos,
                follow,
                seguindo,
                setUserData,
                setRepos,
                setFollow,
                setSeguindo
               
        }}>
            {props.children}
            </context.Provider>



    )




}