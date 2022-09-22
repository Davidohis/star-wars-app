import styled from "styled-components";

interface Props {
  title: string;
}

export default function TableHeadingComponent({ title }: Props) {
  const HeaderTitle = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #a4a7b7;
  `;
  return <HeaderTitle>{title}</HeaderTitle>;
}
