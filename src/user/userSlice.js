import {createSlice} from 'redux-starter-kit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.language = action.payload.language;
    }
  }
});

export const { login } = userSlice.actions;
export default userSlice;
