import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'

import './StatesDropdown.css';
import { loadStates, loadCities } from '../actions';
import _ from 'lodash';


const StatesDropdown = () => {
	const states = useSelector(state => state.states, _.isEqual);
	const options = Object.values(states)
		.map(state => ({ key: state.id, value: state.id, text: state.name }));
	const dispatch = useDispatch();

	React.useEffect(
		() => loadStates(dispatch)
	);

	return (
		<div className={'states-dropdown'}>
			<Dropdown
				placeholder='Selecciona un estado'
				fluid
				search
				selection
				options={options}
				onChange={(e, data) => loadCities(states[data.value], dispatch)}
			/>
		</div>
	)
}

export default StatesDropdown;
