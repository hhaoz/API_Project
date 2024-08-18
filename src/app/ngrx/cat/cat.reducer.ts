import {CatState} from "./cat.state";
import {createReducer, on} from "@ngrx/store";
import * as CatAction from "./cat.action";

const initialState: CatState = {
  cats: [],
  loading: false,
  error: '',
}

export const catReducer = createReducer(
  initialState,
  on(CatAction.getAllCats, (state, quantity) => {
  return {
    ...state,
    loading: true,
  }
}),
  on(CatAction.getAllCatsSuccess, (state, {cats}) => {
    return {
      ...state,
      cats: cats,
      loading: false,
    }
  }),
  on(CatAction.getAllCatsError, (state, fail) => {
    return {
      ...state,
      error: fail.error,
      loading: false,
    }
  })
)
