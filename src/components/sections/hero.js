import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`

`;

const hero = () => {
    return (
        <div>
            <StyledHeroSection>
                <h1> Hello, my name is</h1>
                <h2>Teo Nys</h2>
                <h3>I'm a Software Developer, Designer & Student </h3>
                <p>I'm a Computer Science student at NYU </p>
            </StyledHeroSection> 
            
        </div>
    )
}

export default hero