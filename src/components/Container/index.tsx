import React from "react";
import * as Styled from "./styled";

type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
