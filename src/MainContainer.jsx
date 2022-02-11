import React from 'react';
import MainCard from './MainCard.jsx';
import SubCard from './SubCard.jsx';
import './MainContainer.css';

function MainComponent(props) {
	return (
		<div className='flex-container'>
			<div className='grid-container'>
				<MainCard firstName='Eli Shparaga' />
				{props.jsonData.map((subCard, index) => {
					return <SubCard color={props.colorList[index]} data={subCard} />;
				})}
			</div>
		</div>
	);
}

export default MainComponent;
