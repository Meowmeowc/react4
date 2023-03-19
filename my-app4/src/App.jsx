import { useState, useEffect, axios } from "react";

function App() {


	// const [click, setClick] = useState(0);
	// // const [click, setClick] = useState(null)
	// useEffect(() => {
	// 	fetch(`https://62eccf42818ab252b602d7c4.mockapi.io/items`)
	// 		.then((res) => {
	// 			return res.json()
	// 		})
	// 		.then((data) => {
	// 			return data
	// 		})
	// })

	const { click } = await axios.get()

	return (
		<div className="App">
			<p>
				вы нажали {click} раз
			</p>
			<button onClick={() => setClick(click + 1)}>
				Нажми на меня
			</button>
		</div >
	);
}

export default App;
