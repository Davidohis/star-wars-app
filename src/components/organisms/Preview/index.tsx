import { Typography } from "antd";
import { PreviewContents, PreviewWrapper } from "./styles";
import * as Atom from "../../atoms";
import Image from "../../../assets/preveiw-img.png";

export default function PreviewComponent({ title }: any) {
  const { Title, Paragraph } = Typography;

  return (
    <PreviewWrapper>
      <Atom.ImageComponent
        image={Image}
        alt={"logo"}
        sx={"318px"}
        hg={"height"}
      />
      <PreviewContents>
        <Title>{title}</Title>
        <Paragraph>Director: Kingsley Omin</Paragraph>
        <Paragraph>Producer: Kingsley Omin</Paragraph>
        <Paragraph>Release Date: January 24, 2022.</Paragraph>
        <Paragraph>No Time </Paragraph>
      </PreviewContents>
    </PreviewWrapper>
  );
}
