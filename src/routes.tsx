import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoutes from './private.routes'
import Home from './views/pages/Home';
import Contact from './views/pages/Contact';
import Login from './views/pages/Login';
import Panel from './views/pages/Panel';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <PrivateRoutes path="/panel" exact component={Panel} />

      </Switch>
    </BrowserRouter>
  );
}

export default Router;