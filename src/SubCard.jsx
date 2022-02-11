import React from 'react';
import './SubCard.css';

function SubCard(props) {
	return (
		<div
			className='track-card'
			style={{
				background: `linear-gradient(to top,#0f1424,${props.color}, ${props.color} )`,
			}}>
			<div className='track-subcard'>
				<div className='top-container'>
					<p className='type'>{props.data.title}</p>
					<img src='/icon-ellipsis.svg' alt='elipsis' />
				</div>
				<p className='time-spent'>32hrs</p>
				<p className='last-time'>Last Week - 36hrs</p>
			</div>
			<img
				className='icon'
				src={`/icon-${props.data.title.toLowerCase()}.svg`}
				alt='icon'
			/>
		</div>
	);
}

export default SubCard;
