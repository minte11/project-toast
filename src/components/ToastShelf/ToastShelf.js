import React, {useContext, useEffect} from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";


function ToastShelf () {
	const {toasts, deleteToast} = useContext(ToastContext);
	if (toasts.length <= 0) return null;
	
	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toasts.map(({message, variant, id}) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast handleDismiss={() => deleteToast(id)} variant={variant}>{message}</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
