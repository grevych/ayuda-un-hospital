import React from 'react';
import { Grid } from 'semantic-ui-react'

import Header from './components/Header';
import Panel from './components/Panel';
import './App.css';


function App() {
	return (
		<>
			<Grid centered>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<Header />
				</Grid.Column>
			</Grid>
			<Grid centered>
				<Grid.Column mobile={16} tablet={10} computer={12}>
					<Panel />
				</Grid.Column>
			</Grid>
		</>
  );
}

export default App;
