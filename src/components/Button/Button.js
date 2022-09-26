import styles from './Button.module.scss';

const Button = props => {
    return (<button className={styles.button} text={props.text} type="button">{props.children}</button>);
};

export default Button;