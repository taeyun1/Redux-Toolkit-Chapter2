import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk()는 2개 파라미터 필요 action type과, action type이 호출 됐을때 실행될 코드 작성
const asyncUpFetch = createAsyncThunk("counterSlice/asyncUpFetch", async () => {
  const resp = await fetch(
    "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
  );
  const data = await resp.json();
  return data.value;
});

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
    status: "Welcome",
  },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  // 비동기 작업을 extraReducers를 써야함 (왜냐? action을 만들어주지않아어)

  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});
export default counterSlice;
export const { up, set } = counterSlice.actions;
export { asyncUpFetch };
