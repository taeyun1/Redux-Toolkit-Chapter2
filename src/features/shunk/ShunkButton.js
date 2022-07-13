import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncUpFetch, up } from "./shunkSlice";

const Shunk = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const status = useSelector((state) => {
    return state.counter.status;
  });

  return (
    <div>
      <h3>Shunk란: 비동기 작업을 처리하기 위해 사용 (끝날때 까지 기다림)</h3>
      <p>async fetch없이 thunk로 비동기 처리하기</p>
      {count} | {status}
      <button
        onClick={() => {
          dispatch(up(1));
        }}
      >
        그냥 + 버튼
      </button>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + thunk 버튼
      </button>
      {/* <p>createAsyncThunk()는 비동기 작업을 처리하는 Action을 만들어준다.</p>
      <ol>
        <h4>비동기 작업을 하면 크게 3가지 작업이있음</h4>
        <li>
          asyncUpFetch.<b>pending</b> : 비동기 작업을 시작했을 때 상태
        </li>
        <li>
          asyncUpFetch.<b>fullfilled</b> : 비동기 작업이 끝났을 때 상태
        </li>
        <li>
          asyncUpFetch.<b>rejected</b> : 비동기 작업중 오류가 생겨 중단 됐을 때{" "}
        </li>
        createAsyncThunk()를 사용하면 쓸수있는 상수임 3가지 상태별로 리듀서가
        필요하고, 그 리듀서는 어디다가 주냐면, extraRducers에 줌
        builder.addCase를 통해 pending, fullfilled, rejected 일 때 각각의 동작할
        리듀서를 두번째 파라미터에 전달
      </ol> */}
    </div>
  );
};

export default Shunk;
