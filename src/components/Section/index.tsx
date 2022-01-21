import { useElementOnScreen } from "../../hooks/useElementOnScreen";

import * as Styled from "./styled";

type SectionProps = {
  children: React.ReactNode;
};
export default function Section({ children }: SectionProps) {
  const { animation, containerRef } = useElementOnScreen();

  return (
    <Styled.Section className={animation} ref={containerRef}>
      {children}
    </Styled.Section>
  );
}
