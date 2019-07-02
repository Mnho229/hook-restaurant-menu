import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuSection from './MenuSection';
import UserContext from '../UserContext';
import Page403 from '../util/403/Page403';

export default function Display(props) {

  const PrivateRoute = ({ component, ...options }) => {
    const user = useContext(UserContext);
    const finalComponent = user ? component : Page403;
  
    return <Route {...options} component={finalComponent} />;
  };

  return (
      <div className="l-display">
        <Route exact path="/" component={MenuSection} />
        <Route path="/sharables" component={MenuSection} />
        <Route path="/entrees" component={MenuSection} />
        <Route path="/desserts" component={MenuSection} />
        <Route path="/sides" component={MenuSection} />
        <Route path="/drinks" component={MenuSection} />
        <PrivateRoute path="/chef" component={MenuSection} />
      </div>
  )
}