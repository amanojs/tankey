import 'styles/globals.css';
//import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import mui_theme from '../config/mui_theme';
import { Provider } from 'architecture/services/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <ThemeProvider theme={mui_theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
