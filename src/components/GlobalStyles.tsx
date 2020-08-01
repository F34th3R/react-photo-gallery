import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');

  :root{
    --primary: #efb6b2;
    --secondary: #4e4e4e;
    --error: #ff4a4a;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Serif', 'Poppins', 'Sans Serif';
  }
  body {
    background: #f7f7f7;
    color: var(--secondary);
  }
  .App {
    max-width: 960px;
    margin: 0 auto;
  }
`
