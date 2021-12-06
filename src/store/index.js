
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../redux/index';
import rootSagas from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : function (f) {
          return f;
        },
  ),
);
sagaMiddleware.run(rootSagas);

export default store;