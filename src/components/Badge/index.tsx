import * as Styled from "./styled";

type BadgeProps = {
  title: string;
  url: string;
};

type IconBadgeProps = {
  url: string;
};
export default function Badge({ title, url }: BadgeProps) {
  return (
    <Styled.Badge>
      <IconBadge url={url} />
      {title}
    </Styled.Badge>
  );
}

function IconBadge({ url }: IconBadgeProps) {
  return <img src={url} alt="technology badge" />;
}
