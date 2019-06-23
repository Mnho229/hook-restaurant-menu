import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuSection from './MenuSection'

export default function Display(props) {
  return (
    
      <div className="c-display">
        <Route exact path="/" component={MenuSection} />
        <Route exact path="/sharables" component={MenuSection} />
      </div>
  )
}