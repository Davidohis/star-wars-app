import styled from "styled-components";

interface Props {
  image: any;
  alt: string;
  sx: string;
  hg: string;
}

export default function ImageComponent({ image, alt, sx, hg }: Props) {
  const CustomImage = styled.img`
    width: ${(props) => sx};
    height: ${(props) => hg};
  `;

  return <CustomImage src={image} alt={alt} />;
}
