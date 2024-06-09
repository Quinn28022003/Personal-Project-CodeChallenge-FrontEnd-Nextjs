import { createGlobalStyle } from 'antd-style'

import { cssVars } from '@/theme'

const GlobalStyles: React.NamedExoticComponent<object> = createGlobalStyle`
  // Overwrite react-toastify vars
  :root {
    --toastify-color-info: ${globalTheme => globalTheme.theme.colorInfo};
    --toastify-color-success: ${globalTheme => globalTheme.theme.colorSuccess};
    --toastify-color-warning: ${globalTheme => globalTheme.theme.colorWarning};
    --toastify-color-error: ${globalTheme => globalTheme.theme.colorError};
    --toastify-font-family: ${globalTheme => globalTheme.theme.fontFamily};
    --toastify-text-color-info: ${globalTheme => globalTheme.theme.colorError};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    margin: 0;
  }
  
  h1 {
    font-size: 90px;
    font-weight: 500;
  }

  .headline-2-light-60px {
    font-size: 60px;
    font-weight: 500;
  }

  .headline-2-light-60px.italic {
    font-size: 60px;
    font-weight: 500;
    font-style: italic;
  }

  .headline-3-regular-48px {
    font-size: 48px;
    font-weight: 600;
  }

  .headline-3-regular-48px.italic {
    font-size: 48px;
    font-weight: 600;
    font-style: italic;
  }

  .headline-4-regular-34px {
    font-size: 34px;
    font-weight: 600;
  }

  .headline-4-regular-34px.italic {
    font-size: 34px;
    font-weight: 600;
    font-style: italic;
  }

  .headline-5-regular-24px {
    font-size: 24px;
    font-weight: 600;
  }

  .headline-5-regular-24px.italic {
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
  }

  .headline-6-medium-20px {
    font-size: 20px;
    font-weight: 700;
  }

  .headline-6-medium-20px.italic {
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
  }

  .subtitle-1 {
    font-size: 16px;
    font-weight: 600;
  }

  .subtitle-1.italic {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
  }

  .subtitle-2 {
    font-size: 14px;
    font-weight: 700;
  }

  .body-1 {
    font-size: 16px;
    font-weight: 600;
  }

  .body-2 {
    font-size: 14px;
    font-weight: 600;
  }

  .button {
    font-size: 14px;
    font-weight: 700;
  }

  .caption {
    font-size: 12px;
    font-weight: 600;
  }

  .overline {
    font-size: 10px;
    font-weight: 600;
  }

  .text-stroke-2 {
    -webkit-text-stroke: 2px ${cssVars.colorPrimary};
  }

  .text-stroke-1 {
    -webkit-text-stroke: 1px ${cssVars.colorPrimary};
  }
  
  .select-dark-mode.ant-select-dropdown {
    background: #1f2937;
  }

  .select-dark-mode.ant-select-dropdown .ant-select-item {
    color: white
  }
`

export default GlobalStyles
