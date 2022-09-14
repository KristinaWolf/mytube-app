import { call, put, takeEvery } from "redux-saga/effects";
import network from "../../network";
import { getContentAction } from "./actions";

export function* getContentSaga({ payload }) {
  //перехват от сервера, чтобы положить в redux
  try {
    //отлов ошибок
    const response = yield call([network, network.getContent], payload); //yield- делает запрос, куда идёт getContent (call-метод)

    yield put(getContentAction.success(response)); //кладём ответ в success(response)
  } catch (error) {
    yield put(getContentAction.failure(error)); // ошибка то failure(error)
  }
}

export function* watchContent() {
  // function* функция генератор, отсматривает, всё время стотрит
  yield takeEvery(getContentAction.request, getContentSaga); //когда делаем запрос, отсматривает (отлавливает) наш ответ
}
