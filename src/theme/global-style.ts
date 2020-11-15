import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyle = css`
  body {
    color: ${(props) => props.theme.colors.text.main};
    background-color: ${(props) => props.theme.colors.background.surface};
    font-family: Roboto, Open Sans, sans-serif;
    position: relative;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }

  input {
    outline: none;
  }

  p,
  a {
    word-break: break-word;
    text-decoration: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: border 0.2s, color 9999s ease-out,
      background-color 9999s ease-out;
    background-clip: text;
  }

  @keyframes loader-1-outter {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
