import AppProvider from 'providers/AppProvider';
import { Navigation } from 'components/Navigation';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navigation />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
