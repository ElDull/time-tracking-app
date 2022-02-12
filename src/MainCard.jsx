import React, { useEffect, useState } from 'react';
import './MainCard.css';

function MainCard(props) {
	const [selected, setSelected] = useState('weekly');
	useEffect(() => {
		document.getElementById(selected).classList.add('selected');
		props.getTimeSpan(selected);
		return () => {
			document.getElementById(selected).classList.remove('selected');
		};
	}, [selected]);
	const handleClick = ({ target }) => {
		setSelected(target.id);
	};
	return (
		<div className='main-card'>
			<div className='sub-card'>
				<img src='/image-jeremy.png' alt='img' />
				<p>
					Report for <br />
					<span>{props.firstName}</span>
				</p>
			</div>
			<div className='times'>
				<p id='daily' onClick={handleClick}>
					Daily
				</p>
				<p id='weekly' onClick={handleClick}>
					Weekly
				</p>
				<p id='monthly' onClick={handleClick}>
					Monthly
				</p>
			</div>
		</div>
	);
}

export default MainCard;
