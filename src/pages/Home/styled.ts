import styled from "@emotion/styled"
import HeroBackground from '../../assets/images/hero-background.png'

export const Hero = styled.div({
    background: `url(${HeroBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    overflow: 'hidden',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
})