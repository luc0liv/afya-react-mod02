import Router from './routes';
import GlobalStyles from './assets/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (<>
  <GlobalStyles />
  <Router />
  <ToastContainer />
  </>);

}

export default App;
