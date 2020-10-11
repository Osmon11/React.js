import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const initialState = {
  admin: {
    auth: false,
  },
  alph: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  questions: [
    {
      ans: "React",
      que:
        "JavaScript-библиотека с открытым исходным кодом, разработанная Facebook для создания сложных интерактивных пользовательских интерфейсов в приложениях.",
    },
    {
      ans: "JSON",
      que: "Текстовый формат обмена данными, основанный на JavaScript.",
    },
    {
      ans: "Flux",
      que:
        "Архитектурный шаблон, который обеспечивает однонаправленный поток данных.",
    },
    {
      ans: "State",
      que:
        "Объект, который содержит данные и определяет, как компонент отображается и ведет себя.",
    },
    {
      ans: "Redux",
      que:
        "Контейнер с предсказуемым состоянием для приложений JavaScript, основанный на шаблоне проектирования Flux.",
    },
  ],
  que: "",
  ans: "",
  arr: undefined,
  isNext: false,
  queUpdated: false
};

export const reload = initialState.questions

function reducer_1(state = initialState, action) {
  switch (action.type) {
    case "ACTION_1":
      return {
        ...state,
        admin: {
          auth: action.value,
        },
      };

    case "ACTION_2":
      return {
        ...state,
        questions: action.value,
      };

    case "ACTION_3":
      return {
        ...state,
        que: action.value,
      };

    case "ACTION_4":
      return {
        ...state,
        ans: action.value,
      };

    case "ACTION_5":
      return {
        ...state,
        arr: action.value,
      };

    case "ACTION_6":
      return {
        ...state,
        questions: action.value,
      };
    case "ACTION_8":
      return {
        ...state,
        isNext: action.value,
      };
    case "ACTION_9":
      return {
        ...state,
        queUpdated:  action.value,
      };
    default:
      return state;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  reducer_1: reducer_1,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
