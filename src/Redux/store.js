import {combineReducers, createStore} from 'redux';
import EmployeeReducer from './Reducers';

const rootReducer = combineReducers({
  data: EmployeeReducer, // Renamed from EmployeeReducer to employeeReducer
});

const store = createStore(rootReducer);

export default store;
