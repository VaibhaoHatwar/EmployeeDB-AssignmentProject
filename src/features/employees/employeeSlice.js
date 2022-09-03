import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import employeeService from "./employeeService"

const initialState = {
  employees: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// Get employees
export const getAllEmployees = createAsyncThunk(
  "employees/getAll",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      // return await employeeService.getEmployees(token)
      return await employeeService.getEmployees()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// get employee detail
export const getEmployeeDetail = createAsyncThunk(
  "employees/:id",
  async (id, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token
      //   return await employeeService.getEmployeeDetail(id, token)
      return await employeeService.getEmployeeDetail(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employees = action.payload
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getEmployeeDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEmployeeDetail.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employees = action.payload
      })
      .addCase(getEmployeeDetail.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = employeeSlice.actions
export default employeeSlice.reducer
