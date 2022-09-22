import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FormFooter() {
  const FormFooter = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    margin-top: 5rem;
    margin-bottom: 0px;

    & a {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      text-decoration-line: underline;
      color: #303b54;
      :hover {
        text-decoration: underline;
      }
    }

    & span {
      color: #303b54ae;
      padding: 0px 0.7rem;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 15px;
    }
  `;

  return (
    <FormFooter>
      <Link to="/"> Privacy Policy </Link>
      <span>and</span>
      <Link to="/"> Terms of services</Link>
    </FormFooter>
  );
}
