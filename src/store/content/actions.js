import { createAsyncAction } from "typesafe-actions";

const GET_CONTENT_REQUEST = "@content/GET_CONTENT_REQUEST";
const GET_CONTENT_SUCCESS = "@content/GET_CONTENT_SUCCESS";
const GET_CONTENT_FAILURE = "@content/GET_CONTENT_FAILURE";

export const getContentAction = createAsyncAction(
  [GET_CONTENT_REQUEST, (params) => params],
  [GET_CONTENT_SUCCESS, (data) => data],
  [GET_CONTENT_FAILURE, (error) => error]
)();
