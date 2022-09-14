import { createReducer, getType } from "typesafe-actions";
import { getContentAction } from "./actions";

const initialState = {
  //начальное состояние
  response: [], //ответ от сервера
  error: null, //ошибка которую может вернуть сервер
  loading: false, // статус загрузки
  success: false,
};

export const contentReducer = createReducer(
  //распределяет
  initialState,
  {
    [getType(getContentAction.request)]: (state) => ({
      //запрос на сервер
      ...state, //разварачивае все содержимое
      error: null, // ошибок нет
      loading: true, // пока отправляется идёт загрузка
      success: false,
    }),
    [getType(getContentAction.success)]: (state, { payload }) => ({
      //когда ответ пришёл
      ...state,
      response: payload, //записываются : загрузка, данные от сервера
      loading: false, // загрузки нет
      success: true,
    }),
    [getType(getContentAction.failure)]: (state, { payload }) => ({
      //когда ошибка
      ...state,
      error: payload, //сама ошибка со статутсом ошибки
      loading: false, // загрузки нет
      success: false,
    }),
  }
);
