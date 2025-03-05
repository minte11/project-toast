import React, {createContext, useEffect, useMemo} from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = createContext();

const ToastProvider = ({children}) => {
	const [toasts, setToasts] = React.useState([]);
	
	const addToast = ({variant, message}) => {
		const nextToastId = Math.random();
		const nextToast = {id: nextToastId, variant, message,};
		
		setToasts([...toasts, nextToast]);
	}
	
	const deleteToast = (toastId) => {
		const nextToasts = toasts.filter(toast => toast.id !== toastId);
		setToasts(nextToasts);
	}
	
	useEscapeKey(() => setToasts([]))

	const value = useMemo(() => {
		return {
			toasts,
			addToast,
			deleteToast
		}
	}, [toasts])
	
	return (<ToastContext.Provider value={value}>{children}</ToastContext.Provider>);
}

export default ToastProvider;
