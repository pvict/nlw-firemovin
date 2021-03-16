import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      white: string,
      whiteText: string,
      background: string,
      grayLine: string,
      text: string,
      title: string,
      redMark: string,
      redDark: string,
      titleBlack: string,
      timerBorder: string,
      startButton: string
    }
  }
}