import styled from "styled-components";

export const Card = styled.div`
  max-width: 350px;
  width: 100%;
  padding: 2rem 3rem;
  background-color: #313a49;
  font-size: 20px;
  line-height: 2rem;
  font-weight: 800;
  text-align: center;
  border-radius: 10px;
  margin: 0 10px;
`;

export const AdviceID = styled.h2`
  color: #53ffad;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: #53ffad;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: -60px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 30px #53ffad;
  }
`;
