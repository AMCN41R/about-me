import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      dark: string;
      darkHover: string;
      light: string;
      lightHover: string;
      alt: string;
   }
  }
}