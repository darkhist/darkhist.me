import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }) => (
  <motion.div
    key={router.pathname}
    initial="pageInitial"
    animate="pageAnimate"
    variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}
  >
    <Component {...pageProps} />
  </motion.div>
);

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default MyApp;
