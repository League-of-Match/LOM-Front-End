import styled from "styled-components";

export const StyledInputBox = styled.fieldset`
  width: 100%;

  position: relative;

  input {
    width: 100%;
    height: 49px;
    
    padding-left: 10px;

    background-color: transparent;

    border: 2px solid var(--color-grey-3);

    color: var(--color-white);

    outline: none;

    transition: 0.3s ease;
  }

  input:hover {
    border-color: var(--color-brand-2);
  }

  input:focus {
    border-color: var(--color-brand-1);

    animation: inputAnimation 2s infinite;
  }

  label {
    color: var(--color-grey-3);

    pointer-events: none;

    position: absolute;
    left: 10px;
    top: 7px;

    transform: translateY(10px);

    font-size: 16px;

    transition: 0.3s ease;
  }

  input:focus ~ label,
  input:valid ~ label {
    font-size: 10px;

    color: var(--color-brand-1);

    transform: translateY(0);
  }

  span {
    font-size: 12px;

    color: var(--color-error);

    position: absolute;
    right: 0;
    bottom: -16px;
  }

  @keyframes inputAnimation {
    0% {
      box-shadow: 0 0 5px 0 var(--color-brand-1);
    }
    50% {
      box-shadow: 0 0 10px 0 var(--color-brand-1);
    }
    100% {
      box-shadow: 0 0 5px 0 var(--color-brand-1);
    }
  }
`;
