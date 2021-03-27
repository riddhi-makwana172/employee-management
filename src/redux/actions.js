export const FETCH_EMPLOYEE_START = "FETCH_EMPLOYEE_START";
export const FETCH_EMPLOYEE_END = "FETCH_EMPLOYEE_END";
export const CREATE_EMPLOYEE_END = "CREATE_EMPLOYEE_END";
export const EDIT_EMPLOYEE_END = "EDIT_EMPLOYEE_END";
export const DELETE_EMPLOYEE_END = "DELETE_EMPLOYEE_END";


export const fetchEmployee = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEE_END });
  };
};

export const createEmployee = (payload,history) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE_END, data: payload });
    history.push("/")
  };
};

export const editEmployee = (payload,history,id) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_EMPLOYEE_END, data: payload ,id:id});
    history.push("/")
  };
};

export const deleteEmployee=(id)=>{
  return async (dispatch) => {
    dispatch({ type: DELETE_EMPLOYEE_END, data: id });
  };
}