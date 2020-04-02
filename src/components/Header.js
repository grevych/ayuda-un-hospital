import React from 'react';
import { Grid } from 'semantic-ui-react'

import './Header.css'
import StatesDropdown from './StatesDropdown';
import CitiesDropdown from './CitiesDropdown';


function Header() {
	return (
		<Grid className={'header-wrapper'}>
			<Grid.Column mobile={16} tablet={4} computer={4}>
				<h4 className='ui header logo'>
					<span> Ayuda </span> &nbsp;
					<span role='img' aria-label='heart'> 💛 </span>
					<span> Hospital </span>
				</h4>
			</Grid.Column>
			<Grid.Column mobile={16} tablet={6} computer={6}>
				<StatesDropdown />
			</Grid.Column>
			<Grid.Column mobile={16} tablet={6} computer={6}>
				<CitiesDropdown />
			</Grid.Column>
		</Grid>
	)
}

export default Header;
