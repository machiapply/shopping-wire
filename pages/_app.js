import AppProvider from 'providers/AppProvider';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
