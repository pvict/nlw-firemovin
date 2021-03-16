import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

:root {
  --white:${(props) => props.theme.colors.white};
  --white-text:${(props) => props.theme.colors.whiteText};
  --background: ${(props) => props.theme.colors.background};
  --gray-line: ${(props) => props.theme.colors.grayLine};
  --text: ${(props) => props.theme.colors.text};
  --title: ${(props) => props.theme.colors.title};
  --red-mark: ${(props) => props.theme.colors.redMark};
  --red-light: ${(props) => props.theme.colors.redDark};
  --title-black: ${(props) => props.theme.colors.titleBlack};
  --timer-border: ${(props) => props.theme.colors.timerBorder};
  --start-button: ${(props) => props.theme.colors.startButton};
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