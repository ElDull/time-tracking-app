import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer.jsx';
import jsonData from './data.json';

function App() {
	const colorList = [
		'hsl(15, 100%, 70%)',
		'hsl(195, 74%, 62%)',
		'hsl(348, 100%, 68%)',
		'hsl(145, 58%, 55%)',
		'hsl(264, 64%, 52%)',
		'hsl(43, 84%, 65%)',
	];
	return <MainContainer jsonData={jsonData} colorList={colorList} />;
}

export default App;
