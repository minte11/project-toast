import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground () {
	const [message, setMessage] = React.useState('');
	const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
	const {addToast} = React.useContext(ToastContext);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (message && toastVariant) {
			addToast({variant: toastVariant, message});
		}
	}
	
	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png"/>
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf/>
			<form className={styles.controlsWrapper} onSubmit={handleSubmit}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{alignSelf: 'baseline'}}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message" className={styles.messageInput} value={message}
							onChange={(e) => setMessage(e.target.value)}/>
					</div>
				</div>
				
				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						{VARIANT_OPTIONS.map(option => (
							<label key={option} htmlFor={`variant-${option}`}>
								<input
									id={`variant-${option}`}
									type="radio"
									name="variant"
									value={option}
									checked={option === toastVariant}
									onChange={(e) => setToastVariant(e.target.value)}
								/>
								{option}
							</label>
						))}
					
					</div>
				</div>
				
				<div className={styles.row}>
					<div className={styles.label}/>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						<Button type="submit">Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
