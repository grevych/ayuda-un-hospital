import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'

import './CitiesDropdown.css'
import { loadVenues } from '../actions';
import _ from 'lodash';


const CitiesDropdown = () => {
	const cities = useSelector(state => state.selectedState.cities, _.isEqual);
	const options = Object.values(cities)
		.map(city => ({ key: city.id, value: city.id, text: city.name }));
	const dispatch = useDispatch();

	return (
		<div className={'states-dropdown'}>
			<Dropdown
				placeholder='Selecciona una ciudad'
				fluid
				search
				selection
				options={options}
				onChange={(e, data) => loadVenues(cities[data.value], dispatch)}
			/>
		</div>
	)
}

export default CitiesDropdown;
