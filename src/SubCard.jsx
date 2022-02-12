import React from 'react';
import './SubCard.css';

function SubCard(props) {
	const dictionary = {
		weekly: 'Last Week -',
		daily: 'Yesterday -',
		monthly: 'Last Month -',
	};
	return (
		<div
			className='track-card'
			style={{
				background: `linear-gradient(to top,#0f1424,${props.color}, ${props.color} )`,
			}}>
			<div className='track-subcard'>
				<div className='top-container'>
					<p className='type'>{props.data.title}</p>
					<svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
							fill='#BBC0FF'
							fill-rule='evenodd'
						/>
					</svg>
				</div>
				<p className='time-spent'>{props.data.timeframe.current}hrs</p>
				<p className='last-time'>
					{dictionary[props.timeSpan] + ' ' + props.data.timeframe.previous}hrs
				</p>
			</div>
			{props.data.title === 'Exercise' ? (
				<img
					id='exercise-icon'
					className='icon'
					src={`/icon-${props.data.title.toLowerCase()}.svg`}
					alt='icon'
				/>
			) : (
				<img
					className='icon'
					src={`/icon-${props.data.title.toLowerCase()}.svg`}
					alt='icon'
				/>
			)}
		</div>
	);
}

export default SubCard;
