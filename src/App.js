import React from 'react';
import { Route } from 'react-router-dom'
import { StartPage } from './components/StartPage/StartPage';
import './App.scss'
import { StudentForm } from './components/StudentForm/StudentForm';

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={StartPage} />
      <Route path="/addstudent" component={StudentForm} />
    </div>
  );
}

export default App;
