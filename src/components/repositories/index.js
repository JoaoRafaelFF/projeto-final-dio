import React, { useEffect, useState } from "react";
import * as S from "./styled";
import RepositoryItem from "../repository-item";
import useGithub from "../../hooks/github-hooks";
import { cleanup } from "@testing-library/react";

const Repositories = () => {
    const{githubState,getUserRepos,getUserStarred} =useGithub();
    const[hasUserForSearchrepos,setHasUserForSearchrepos] =useState(false)

    useEffect(()=>{
        if(githubState.user.login)
        {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[githubState.user.login]);
       return(
           <>
           {hasUserForSearchrepos ? 
           <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
           <S.WrapperTab>Repositories</S.WrapperTab>
           <S.WrapperTab>Starred</S.WrapperTab>
       </S.WrapperTabList>
       <S.WrapperTabPanel>
           <S.WarpperList>
           {githubState.repositories.map((item) => (<RepositoryItem key={item.id}name = {item.name} linkToRepo={item.full_name} fullName={item.full_name}/>))}
           </S.WarpperList>    
           </S.WrapperTabPanel>
       <S.WrapperTabPanel>
       <S.WarpperList>
       {githubState.starred.map((item) => (<RepositoryItem key={item.id}name = {item.name} linkToRepo={item.full_name} fullName={item.full_name}/>))}
       </S.WarpperList> 
           </S.WrapperTabPanel>
       </S.WrapperTabs>
    : <></>}
    </>
 );      
};

export default Repositories;