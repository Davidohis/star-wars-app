import styled from "styled-components";

export const CustomContainer = styled.div`
  display: flex;
  background: #fff;
  margin: auto;
  width: 100%;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100vh;
    margin: 0;
  }
`;

export const CustomAccount = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  color: #494949;
  margin-bottom: 30px;

  span {
    padding-left: 7px;
    color: #0e0d0d;
    font-weight: 700;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #ffb800;
    }
    :hover div {
      transition: ease 0.5s;
      width: 77.6px;
      background: #ffb800;
      height: 10.86px;
      -webkit-transform: rotate(-6.11deg);
      -ms-transform: rotate(-6.11deg);
      transform: rotate(-6.11deg);
      clip-path: polygon(68% 9%, 100% 48%, 58% 71%, 17% 54%, 74% 39%, 0 12%);
    }
  }
`;

export const CustomFormWrapper = styled.div`
  width: 65%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: scroll;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 20px;
  }
`;

export const CustomFormInner = styled.div`
  max-width: 467px;
  height: 564px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(164, 167, 183, 0.3);
  border-radius: 8px;
  padding: 5rem;
`;
export const CustomFormInnerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 0px;
  }
`;

export const CustomImage = styled.img`
  height: ${(props) => props.height};
  width: 100%;
  max-width: ${(props) => props.width};
  object-fit: contain;
  cursor: pointer;
`;

export const CustomBodyText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 27px;
  line-height: 120%;
  color: #494949;
  margin-bottom: 30px;
  margin-top: 0px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 25px;
  }

  & > div {
    margin-top: 7px;
    width: 100px;
    height: 0px;
    border: 4.04103px solid rgba(255, 182, 0, 0.46);
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #494949;
    margin-top: 12px;

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 13px;
    }
  }

  @media screen and (min-height: 700px) {
    margin-top: 70px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 40px;
  }
`;

export const CustomFormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 16px;
  }
`;

export const CustomSwiperContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
`;

export const CustomForgotLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a74dc;
  font-weight: 400;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 0px;

  a {
    color: #0a74dc;
    :hover {
      text-decoration: underline;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
  }
`;
