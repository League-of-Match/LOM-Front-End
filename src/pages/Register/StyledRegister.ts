import styled from "styled-components";

export const RegisterPage = styled.div`
  display: flex;
  flex-direction: row;

  footer {
    display: flex;
    align-items: center;
    width: 100%;

    justify-content: space-between;
  }
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SelectRegister = styled.select`
  height: 49px;
  width: 49%;
  background-color: transparent;
  border: 2px solid var(--color-grey-3);
  color: var(--color-grey-3);
`;

export const OptionRegister = styled.option`
  font-size: 16px;
  font-weight: 500;
  font-family: "Montserrat";
  color: var(--color-grey-3);
`;
