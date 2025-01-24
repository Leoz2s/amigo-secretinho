import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { FriendsProvider } from './hooks/friends';

import Routes from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FriendsProvider>
        <Routes />
      </FriendsProvider>
    </ThemeProvider>
  </StrictMode>,
)
