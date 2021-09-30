import { createReducer, createActions } from 'reduxsauce';
import update from 'immutability-helper';

const { Types, Creators } = createActions(
  {
    createRequest: ["data", "history"],
    createSuccess: ["data"],
    createFailure: ["error"],
    showRequest: ["id", "history"],
    showSuccess: ["data"],
    showFailure: ["error"],
    editRequest: ["data", "id", "history"],
    editSuccess: ["data"],
    editFailure: ["error"],
    deleteRequest: ["id", "history"],
    deleteSuccess: [],
    deleteFailure: ["error"],
    captureRequest: ["id", "history"],
    captureSuccess: ["data"],
    captureFailure: ["error"],
    reset: [],
  },
  {
    prefix: "POKEMON_",
  }
);

export const PokemonTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

// create
export const _createRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const _createSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const _createFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

// show
export const _showRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const _showSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const _showFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

// update
export const _editRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const _editSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const _editFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

// delete
export const _deleteRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const _deleteSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: null },
  });

export const _deleteFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

// capture
export const _captureRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const _captureSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const _captureFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const _reset = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_REQUEST]: _createRequest,
  [Types.CREATE_SUCCESS]: _createSuccess,
  [Types.CREATE_FAILURE]: _createFailure,
  [Types.SHOW_REQUEST]: _showRequest,
  [Types.SHOW_SUCCESS]: _showSuccess,
  [Types.SHOW_FAILURE]: _showFailure,
  [Types.EDIT_REQUEST]: _editRequest,
  [Types.EDIT_SUCCESS]: _editSuccess,
  [Types.EDIT_FAILURE]: _editFailure,
  [Types.DELETE_REQUEST]: _deleteRequest,
  [Types.DELETE_SUCCESS]: _deleteSuccess,
  [Types.DELETE_FAILURE]: _deleteFailure,
  [Types.CAPTURE_REQUEST]: _captureRequest,
  [Types.CAPTURE_SUCCESS]: _captureSuccess,
  [Types.CAPTURE_FAILURE]: _captureFailure,
  [Types.RESET]: _reset,
});
