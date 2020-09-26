import { types } from "../types/types";

export const setError= (err) => ({
  type: types.uiSetError,
  payload: err
});

export const UnsetError= () => ({
  type: types.uiUnsetError
});

export const startLoading= () => ({
  type: types.uiStartLoading
});

export const finishLoading= () => ({
  type: types.uiFinishLoading
});