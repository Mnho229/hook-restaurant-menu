import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuSection from './MenuSection';

export default function Display(props) {

  return (
      <div className="l-display">
        <Route exact path="/" component={MenuSection} />
        <Route path="/sharables" component={MenuSection} />
        <Route path="/entrees" component={MenuSection} />
        <Route path="/desserts" component={MenuSection} />
      </div>
  )
}