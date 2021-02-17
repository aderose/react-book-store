import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', roboto, sans-serif;
  }

  :root {
    --primary-color: #3f2b96;
    --secondary-color: #766f8f;
    --dark: #333;
    --light: #eee;
  }

  html {
    height: 100%;
  }

  body {
    color: var(--dark);
    background-color: var(--secondary-color);
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);
    background-blend-mode: soft-light;
  }
`;

export const Card = styled.div`
  background-color: white;
  display: block;
  padding: 2em;
  width: 80%;
  max-width: 400px;
  min-width: 300px;
  margin: 5em auto;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (min-width: 500px) {
    padding: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin: 1.5em 0;
`;

export const Text = styled.p`
  margin: ${({ margin }) => margin};
`;

export const LogoContainer = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);

  @media (min-width: 500px) {
    font-size: 3em;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: var(--primary-color);
  padding: 0.5em 3em;
  margin-top: 1em;
  border: none;
  border-radius: 2px;
  font-size: 1.4em;
  transition: filter 0.3s ease-in;
  cursor: pointer;

  :hover {
    filter: brightness(150%);
  }

  :focus {
    outline: none;
  }
`;
