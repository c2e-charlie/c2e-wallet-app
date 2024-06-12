// styled.d.ts
import 'styled-components/native';
import theme from '.';

type Theme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
