import styled from "@emotion/styled";

export const PageTitle = styled.h3(
    props => ({
        ...props.theme.typography.pageTitle
    })
)

export const Text = styled.p(
    props => ({
        ...props.theme.typography.paragraph
    })
)