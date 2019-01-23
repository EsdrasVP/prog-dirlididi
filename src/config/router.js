import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../containers/welcome/welcome';
import Courses from '../containers/courses/courses';
import ProblemSummary from '../containers/problems/problem-summary';
import Ide from '../components/ide/ide';
import AddProblem from "../containers/problems/add-problem";
import './router.css';

const Router = () => {
  return (
    <div className={'router-body'}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/courses' component={Courses} />
        <Route path='/problems' component={ProblemSummary} />
        <Route path='/ide' component={Ide} />
        <Route path="/addProblem" component={AddProblem}/>
      </Switch>
    </div>
  );
};

export default Router;
