import * as Styled from './styled'

type PageTitleProps = {
    title: string
}

export default function PageTitle({title}:PageTitleProps) {
  return <Styled.PageTitle>{title}</Styled.PageTitle>;
}
