import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', roboto, sans-serif;
    // border: 1px solid red;
  }

  :root {
    --primary: #3f2b96;
    --secondary: #766f8f;
    --tertiary: #b6abde;
    --dark: #333;
    --light: #efefef;
  }

  html {
    height: 100%;
  }

  body {
    color: var(--dark);
    background-color: var(--secondary);
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
  font-size: 1.25em;
`;

export const LogoContainer = styled.div`
  font-size: 1.45em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);

  @media (min-width: 750px) {
    font-size: 2.2em;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: var(--primary);
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

export const Image = styled.img`
  width: 2em;
  border-radius: 50%;

  @media (min-width: 750px) {
    width: 3em;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  position: relative;
  user-select: none;

  :hover {
    background-color: #ccc;
  }

  @media (min-width: 500px) {
    border-radius: 10px;
    padding: 0.3em 0.75em;
    border: 1px solid #ccc;
  }
`;

export const FlexibleText = styled.p`
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  display: none;

  @media (min-width: 500px) {
    display: flex;
  }
`;

export const Header = styled.nav`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 60px;
    background-color: var(--light);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 750px) {
    height: 80px;

    :before {
      height: 80px;
    }
  }

  @media (min-width: 1300px) {
    width: 60%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 900px;
  margin: 4em auto 0 auto;
  padding: 1em 0;
  border-top: 2px solid var(--tertiary);
  position: relative;

  :before {
    position: absolute;
    left: 0;
    top: -1.4em;
    font-size: 1.5em;
    color: var(--light);
    content: '${({ content }) => content}';
  }

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 1300px) {
    width: 60%;
  }
`;

export const BookComponent = styled.div`
  width: 275px;
  background-color: var(--light);
  border-radius: 5px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.15);
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (min-width: 500px) {
    width: 400px;
  }
`;

export const DummyComponent = styled.div`
  width: 275px;
  height: 100px;
  color: var(--tertiary);
  text-align: center;
  font-size: 1.75em;
  line-height: 100px;
  border: 3px dashed var(--tertiary);
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  user-select: none;

  @media (min-width: 500px) {
    width: 400px;
  }
`;

export const BookTools = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  padding: 12px 0 12px 8px;
  padding-left: 8px;
  height: 100%;
  position: absolute;
  font-size: 1.2em;
  right: 0;
  background-color: var(--primary);
  color: var(--light);
`;

export const StatusIcon = styled.div`
  display: flex;
  align-items: center;

  :after {
    content: '';
    display: flex;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    background-color: ${({ status }) => (status ? '#076e20' : '#8c0e0e')};
    border-radius: 50%;
    transition: transform 0.3s ease-in;
  }
`;

export const BookInfo = styled.div`
  color: var(--dark);
  margin: 0 3em 0 1em;
  padding: 0.5em 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  :hover ${StatusIcon}:after {
    transform: scale(1.3);
  }
`;

export const InteractiveIcon = styled.div`
  opacity: 0.5;
  transition: opacity 0.3s ease-in;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const Price = styled.p`
  width: fit-content;
  color: var(--light);
  background-color: var(--primary);
  padding: 0.15em 0.3em;
  border-radius: 20px;

  @media (min-width: 500px) {
    padding: 0.25em 0.5em;
  }
`;

export const Name = styled.strong`
  flex-basis: 100%;
  margin: 0.5em 0;
`;

export const Author = styled.em`
  flex-basis: 100%;
`;
