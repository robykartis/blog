/** @format */

import "bulma/css/bulma.css";
import axios from "axios";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
