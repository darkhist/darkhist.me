import PropTypes from 'prop-types';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}).isRequired
};

export default MyApp;
