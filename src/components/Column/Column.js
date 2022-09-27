import styles from './Column.module.scss';
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'

const Column = props => {
    return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={`${styles.icon} fa fa-${props.icon}`} /> {props.title}</h2>
      <ul className={styles.cards}>
        {props.cards.map(({id, title}) => <Card key={id} title={title} />)}
      </ul>
      <CardForm columnId={props.id} action={props.addCard}/>
    </article>
    );
};

export default Column;