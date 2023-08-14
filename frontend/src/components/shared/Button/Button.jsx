import React from 'react'
import styles from './Button.module.css'


const Button = ({ text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>{text}</span>
            <img src="/images/arrow-forward.png" alt="arrow" className={styles.arrow} />
        </button>
    )
}

export default Button