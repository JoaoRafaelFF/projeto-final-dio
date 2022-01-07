import React, {useState} from "react";
import * as S from "./styled"
import useGithub from "../../hooks/github-hooks";

const Header = () => {
    const{getUser} = useGithub();
    const[usernameForSeache,setusernameForSeache]= useState()

const submitGetUser =() =>
{
    if(!usernameForSeache) return;
    return getUser(usernameForSeache);
};    

    return(<header>
     <S.Wrapper>
         <input type="text"placeholder="Digite o username para pesquisa..." onChange={(event)=>setusernameForSeache(event.target.value)}/>
         <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
     </S.Wrapper>
    </header>);
    
};

export default Header