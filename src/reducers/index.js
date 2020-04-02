import { combineReducers } from 'redux'

import * as types from '../actionTypes'


const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === types.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
};

const requirementsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_REQUIREMENTS:
			return action.requirements.reduce((accum, requirement) => {
				accum[requirement.id] = accum[requirement.id] || requirement;
				return accum;
			}, {...state})
		default:
		  return state
	}
};

const venuesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_VENUES:
			return action.venues.reduce((accum, venue) => {
				accum[venue.id] = accum[venue.id] || venue;
				return accum;
			}, {...state})
		default:
		  return state
	}
};

const citiesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_CITIES:
			return action.cities.reduce((accum, city) => {
				accum[city.id] = accum[city.id] || city;
				return accum;
			}, {...state})
		default:
		  return state
	}
};

const statesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_STATES:
			return action.states.reduce((accum, state) => {
				accum[state.id] = accum[state.id] || state;
				return accum;
			}, {...state})
		default:
		  return state
	}
}

const selectedVenueReducer = combineReducers({
	requirements: requirementsReducer,
});

const selectedCityReducer = combineReducers({
	venues: venuesReducer,
	selectedVenue: selectedVenueReducer,
});

const selectedStateReducer = combineReducers({
	cities: citiesReducer,
	selectedCity: selectedCityReducer,
})

const rootReducer = combineReducers({
  states: statesReducer,
  selectedState: selectedStateReducer,
  errorMessage,
});

export default rootReducer;
