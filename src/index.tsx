import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { lightTheme, DarkTheme } from './theme';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={DarkTheme}>
    <App />
  </ThemeProvider>
);
