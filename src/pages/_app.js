import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/shared/navigation/Navigation";
import { Container } from 'react-bootstrap';


export default function App({ Component, pageProps }) {
  return (
    <>
        <div class="NavigationPositioning">
          <Navigation />
        </div>
        <Component {...pageProps} />
    </>
  );
}
