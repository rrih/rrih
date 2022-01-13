
import { AppProps } from 'next/app'

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Component {...pageProps} />
  );
};

export default CustomApp;