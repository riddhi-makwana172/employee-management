import {
  FETCH_EMPLOYEE_END,
  CREATE_EMPLOYEE_END,
  DELETE_EMPLOYEE_END,
  EDIT_EMPLOYEE_END,
} from "./actions";

const initialState = {
  employeeList: [{
    id:20,
    "firstName":"Robert",
    lastName:"Smith",
    dob:"2021-03-12",
    employeeType:"Work From Home",
    email:"robert.smith@gmail.com",
    file:"",
    hobbies:["Travelling"]
  }],
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_END:
      return { ...state, employeeList: state.employeeList };
    case CREATE_EMPLOYEE_END:
      return {
        ...state,
        employeeList: [...state.employeeList, action.data],
      };
    case EDIT_EMPLOYEE_END:
      for (var i in state.employeeList) {
        if (state.employeeList[i].id ===action.id) {
          state.employeeList[i].firstName = action.data.firstName;
          state.employeeList[i].lastName = action.data.lastName;
          state.employeeList[i].email = action.data.email;
          state.employeeList[i].dob = action.data.dob;
          state.employeeList[i].file = action.data.file;
          state.employeeList[i].hobbies = action.data.hobbies;
          state.employeeList[i].employeeType = action.data.employeeType;
           break; //Stop this loop, we found it!
        }
      }
    
      return {
        ...state,
        employeeList: state.employeeList,
      };

    case DELETE_EMPLOYEE_END:
      return {
        ...state,
        employeeList:
          state.employeeList &&
          state.employeeList.filter((val) => val.id !== action.data),
      };
    default:
      return { ...state };
  }
};
export default employee;
