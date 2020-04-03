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
				accum[requirement.id] = requirement;
				return accum;
			}, {})
		case types.SET_CITIES:
			return {}
		case types.SET_VENUES:
			return {}
		default:
		  return state
	}
};

const venuesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_VENUES:
			return action.venues.reduce((accum, venue) => {
				accum[venue.id] = venue;
				return accum;
			}, {})
		case types.SET_CITIES:
			return {}
		default:
		  return state
	}
};

const citiesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_CITIES:
			return action.cities.reduce((accum, city) => {
				accum[city.id] = city;
				return accum;
			}, {})
		default:
		  return state
	}
};

const statesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_STATES:
			return action.states.reduce((accum, state) => {
				accum[state.id] = state;
				return accum;
			}, {})
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
