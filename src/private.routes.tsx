import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const privateRoutes: any = (
  {component: Component, ...rest} : any
) => {
  const isLogin: string | null = localStorage.getItem('@tokenAfiaApp')

  return (
    <Route {...rest} render={props => (
      isLogin !== null ? <Component {...props} /> :
      <Redirect to ="/login" />
    )} />
  );
}

export default privateRoutes;