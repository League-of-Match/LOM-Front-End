import styled from "styled-components";

export const RegisterPage = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledSelect = styled.div`
  fieldset {
    width: 49%;

    position: relative;
  }

  >div{
    display: flex;
    flex-direction: column;
    width: 49%;
  }

  select {
    height: 49px;
    width: 100%;
    background-color: transparent;
    color: var(--color-grey-3);

    border: 2px solid var(--color-grey-3);
  }

  select:hover {
    border-color: var(--color-brand-2);
  }

  select:focus {
    border-color: var(--color-brand-1);
    animation: inputAnimation 2s infinite;
  }

  option {
    font-size: 16px;
    font-weight: 500;
    font-family: "Montserrat";

    color: var(--color-grey-3);
  }

  span {
    font-size: 12px;

    color: var(--color-error);

    position: absolute;
    right: 0;
    bottom: -16px;

    text-align: right;
  }
`;
