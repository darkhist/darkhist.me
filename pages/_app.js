import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }) => (
  <AnimatePresence>
    <motion.div
      key={router.pathname}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>
);

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default MyApp;
