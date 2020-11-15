/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="styled-components/cssprop" />

import { Theme } from '@theme'
import { CSSProp, DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp<DefaultTheme>
  }
}
