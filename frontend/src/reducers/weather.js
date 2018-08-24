import {
  FETCHING_WEATHER,
  FETCHED_WEATHER,
  FETCHING_WEATHER_LOCAL,
  FETCHED_WEATHER_LOCAL,
  CLOSE_ERROR,
  ERROR
} from "../actions/types";

const INITIAL_STATE = {
  fetchingWeather: false,
  fetchingLocalWeather: false,
  errorMessage: null,
  showError: false,
  weatherInfo: [],
  localWeather: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_WEATHER:
      return { ...state, fetchingWeather: true, errorMessage: false };
    case FETCHED_WEATHER:
      console.log("ACTION PAYLOAD WHEN FETCHED", action.payload.data);
      console.log("STATE IN REDUCER", state);
      return {
        ...state,
        weatherInfo: [...state.weatherInfo, action.payload.data],
        fetchingWeather: false,
        errorMessage: false
      };
    case FETCHING_WEATHER_LOCAL:
      return { ...state, fetchingLocalWeather: true, errorMessage: false };
    case FETCHED_WEATHER_LOCAL:
      return {
        ...state,
        localWeather: action.payload,
        fetchingLocalWeather: false,
        errorMessage: false,
        showError: false
      };
    case CLOSE_ERROR:
      return {
        ...state,
        fetchingLocalWeather: false,
        fetchingWeather: false,
        showError: false
      };
    case ERROR:
      //   console.log("ACTION IN ERROR", action);
      console.log("ERROR MESSAGE IN REDUCERS", state);
      return {
        ...state,
        errorMessage: action.errorMessage,
        fetchingLocalWeather: false,
        fetchingWeather: false,
        showError: true
      };
    default:
      return state;
  }
}
