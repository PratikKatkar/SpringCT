import {ADD_EMPLOYEE} from './CONSTANTS';

export const addEmployee = payload => {
  return {
    type: ADD_EMPLOYEE,
    payload: payload,
  };
};
