import React, { useEffect } from "react";

// export default function (props) {
// 	if (!props.isopen)
// 		return ReactDOM.createPortal(
// 			<div className="modal">
// 				<span>{props.message}</span>
// 				<button onClick={onClose}>
// 					кликни чтобы закрыть
// 				</button>
// 			</div>,
// 			domNode
// 		)
// }

function useHookStatus(friend) {

	const [click, setClick] = useState(null)
	useEffect(() => {
		document.title = 'Вы нажали {count} на заголовок'
	})
}