import { AppState, AppThunk } from '@/store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestBodyCreatePost } from 'utils/types';

// import { fetchCount } from './counterAPI'

export interface PostState {
  value: number;
  formCreate: RequestBodyCreatePost;
}

const initialState: PostState = {
  value: 0,
  formCreate: {
    jobName: '',
    jobRequirement: '',
    quantity: '1',
    status: 'OPEN',
    timeWorking: [],
    salaryInformation: [],
    workLocations: [],
    hashtags: [],
    userId: 1
  }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'post/fetchPost',
  async (amount: number) => {
    // const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    // return response.data
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    setWorkLocations: (state, { payload }: PayloadAction<string>) => {
      if (payload) {
        state.formCreate.workLocations.push(payload);
      }
    }
  }
});

export const { setWorkLocations } = postSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.post.value)`
export const selectPost = (state: AppState) => state.post;
export const selectPostFormCreate = (state: AppState) => state.post.formCreate;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectPost(getState());
    if (currentValue.value % 2 === 1) {
      // dispatch(incrementByAmount(amount));
    }
  };

const postReducer = postSlice.reducer;

export default postReducer;
