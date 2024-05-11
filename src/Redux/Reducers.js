import { ADD_EMPLOYEE } from './CONSTANTS';

const initialState = {
  EmployeesData: [],
};

const EmployeeReducer = (state = initialState, action) => {
  // console.log("zzzzzzzzzzzzzzzzzz",action.payload)
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        EmployeesData: [...state.EmployeesData, action.payload], 
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
