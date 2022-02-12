import React, { useEffect, useState } from 'react';
import MainCard from './MainCard.jsx';
import SubCard from './SubCard.jsx';
import './MainContainer.css';

function MainComponent(props) {
	const getTimeSpan = (timespan) => {
		setTimeSpan(timespan);
	};
	const filterData = (timeSpan) => {
		const data = [];
		props.jsonData.forEach((dp) => {
			data.push({
				title: dp['title'],
				timeframe: dp['timeframes'][timeSpan],
			});
		});
		return data;
	};
	const [timeSpan, setTimeSpan] = useState('weekly');
	const [data, setData] = useState(filterData(timeSpan));
	useEffect(() => {
		setData(filterData(timeSpan));
	}, [timeSpan]);

	return (
		<div className='flex-container'>
			<div className='grid-container'>
				<MainCard firstName='Jeremy Robson' getTimeSpan={getTimeSpan} />
				{data.map((dp, index) => {
					console.log(dp);
					return (
						<SubCard
							key={index}
							color={props.colorList[index]}
							data={dp}
							timeSpan={timeSpan}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default MainComponent;
