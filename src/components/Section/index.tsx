import { useElementOnScreen } from "../../hooks/useElementOnScreen";

import * as Styled from "./styled";

type SectionProps = {
  id?: string,
  children: React.ReactNode;
};
export default function Section({ children, id }: SectionProps) {
  const { animation, containerRef } = useElementOnScreen(id);
  return (
    <Styled.Section id={id} className={animation} ref={containerRef}>
      {children}
    </Styled.Section>
  );
}
