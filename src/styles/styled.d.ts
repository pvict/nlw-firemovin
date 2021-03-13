import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      white: string,
      background: string,
      grayLine: string,
      text: string,
      title: string,
      redMark: string,
      redLight: string,
      titleBlack: string
    }
  }
}