import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card } from 'semantic-ui-react'
import moment from 'moment';

import './Panel.css'
import { loadRequirements } from '../actions';
import _ from 'lodash';


const getMapLink = ({latitude, longitude}) => {
	return `https://maps.google.com/?q=${latitude},${longitude}`;
}

function Panel() {
	const venues = useSelector(
		state => state.selectedState.selectedCity.venues, _.isEqual
	);
	const requirements = useSelector(
		state => state.selectedState.selectedCity.selectedVenue.requirements,
		_.isEqual
	);
	const dispatch = useDispatch();

	React.useEffect(
		() => { loadRequirements(venues, dispatch) }
	)

	return (
		<Grid centered>
			{
				Object.values(requirements).map((requirement) => (
					<Grid.Column
						mobile={16}
						tablet={8}
						computer={5}
						key={requirement.id}
					>
						<Card>
							<Card.Content key={requirement.id}>
								<Card.Header>{ requirement.title }</Card.Header>
								<Card.Meta>
									{ venues[requirement.venue.id].name }
									{
										venues[requirement.venue.id].location &&
											<a href={getMapLink(venues[requirement.venue.id].location)}>
												<span className='location' role='img' aria-label='location'>📍</span>
											</a>
									}
								</Card.Meta>
								<Card.Description>
									{ requirement.content }
								</Card.Description>
							</Card.Content>
							<Card.Content extra textAlign={'center'}>
								{ moment(requirement.createdAt).startOf('minute').fromNow() }
							</Card.Content>
						</Card>
					</Grid.Column>
				))
			}
		</Grid>
	)
}

export default Panel;
