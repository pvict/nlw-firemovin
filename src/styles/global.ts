import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

:root {
  --white:${(props) => props.themes.colors.white};
  --background: ${(props) => props.themes.colors.white};
  --gray-line: ${(props) => props.themes.colors.white};
  --text: ${(props) => props.themes.colors.white};
  --title: ${(props) => props.themes.colors.white};
  --red-mark: ${(props) => props.themes.colors.white};
  --red-light: ${(props) => props.themes.colors.white};
  --title-black: ${(props) => props.themes.colors.white};
}

.wrapper {
  display: flex;
  align-items: center;
  margin-left: 5rem;
}

body {
  background: var(--background);
  color: var(--text);
}

body, input, textarea, button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

@media(max-width: 1300px) {
  html {
    font-size: 87.5%;
  }
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 767px) {
  html {
    font-size: 87.5%;
  }
  .wrapper {
    margin-left: 0;
  }
}

`;