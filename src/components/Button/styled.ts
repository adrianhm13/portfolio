import styled from "@emotion/styled";

export const Button = styled.a({
    padding: '0.5rem 1rem',
    fontSize: '0.8rem',
    transition: '0.5s',
    cursor: 'pointer',
},
    props => ({
        fontFamily: props.theme.typography.fontMono,
        border: `1px solid ${props.theme.secondary.light}`,
        '&:hover': {
            backgroundColor: props.theme.secondary.main,
            border: `1px solid ${props.theme.secondary.main}`,
        }
    })
)