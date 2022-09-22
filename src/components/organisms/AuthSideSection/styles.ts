import styled from "styled-components";

export const CustomOnboardingWrapper = styled.div`
  width: 35%;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.md} {
    width: auto;
  }
`;
export const CustomOnboarding = styled.div`
  background-color: #031434;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    order: 0;
    display: none;
  }
`;
