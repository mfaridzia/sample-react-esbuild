import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

const App = (props: { message: string }) => {
	const [count, setCount] = useState<number>(0);
	const increment = useCallback(() => {
		setCount(c => c + 1);
	}, [count]);

	return (
		<>
			<h1> { props.message } </h1>
			<h2> { count } </h2>
			<button onClick={increment}> 
				Increment 
			</button>
		</>
	)
}

ReactDOM.render(
	<App message='Hello World!' />, 
	document.getElementById('root')
);