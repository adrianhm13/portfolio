import styled from "@emotion/styled";

export const Text = styled.p(
    props => ({
        ...props.theme.typography.paragraph
    })
)