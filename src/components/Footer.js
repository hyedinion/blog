import * as React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 30px ${props => props.theme.sideSpace.large};
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        max-width: 760px;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        font-size: 0.8rem;
        padding: 10px ${props => props.theme.sideSpace.small} 10px;
    }
`

const FooterContent = styled.div`
    color: ${props => props.theme.colors.base};
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                © {new Date().getFullYear()}, jihae-Na All rights reserved.
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer