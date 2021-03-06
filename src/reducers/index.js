import { combineReducers } from 'redux';
import ProblemReducer from './problem';
import CoursesReducer from './course-reducer';
import WelcomeReducer from './welcome-reducer';

const rootReducer = combineReducers({
  problemReducer: ProblemReducer,
  coursesReducer: CoursesReducer,
  welcomeReducer: WelcomeReducer
});

export default rootReducer;
