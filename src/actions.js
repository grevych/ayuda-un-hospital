import API from './api'
import * as types from './actionTypes'

const api = API().getInstance()

export const loadStates = (dispatch) => {
	const apiStates = api.getStates();
	dispatch({ type: types.SET_STATES, states: apiStates})
}

export const loadCities = async (state, dispatch) => {
	const apiCities = await state.getCities();
	dispatch({ type: types.SET_CITIES, cities: apiCities })
}

export const loadVenues = async (city, dispatch) => {
	const apiVenues = await city.getVenues();
	dispatch({ type: types.SET_VENUES, venues: apiVenues })
}

export const loadRequirements = async (venues, dispatch) => {
	const apiRequirements = await Promise.all(
		Object.values(venues).map(venue => venue.getRequirements())
	)
	dispatch({ type: types.SET_REQUIREMENTS, requirements: apiRequirements.flat() })
}
