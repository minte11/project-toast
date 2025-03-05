import {useEffect} from "react";

const useEscapeKey = (callback) => {
	if (typeof callback !== 'function') {
		throw new TypeError('callback must be a function');
	}
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.code === "Escape") {
				callback();
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [])
}

export default useEscapeKey;