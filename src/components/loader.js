import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import LoaderIcon from './icons/loader';

const LoaderContainer = styled.div`
font-family: var(--font--mono);
animation: fadeIn ease 4s;
@keyframes fadeIn{
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
position: fixed;
top: 45%;
bottom: 0;
left: 45%;
right: 0;
width: 100%;
height: 100%;
background-color: var(--dar-background);
`;

const Loader = ({finishLoading}) => {
    const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 5);
    setTimeout(() => {
        finishLoading()
    }, 2500)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderContainer isMounted = {isMounted}>
        <LoaderIcon></LoaderIcon>
    </LoaderContainer> 

  )


}

export default Loader
