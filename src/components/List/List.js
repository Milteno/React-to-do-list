import styles from "./List.module.scss";
import Column from '../Column/Column';
import { useState } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' }
      ]
    }
  ]);

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if(column.id === columnId)
        return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
      else
        return column
    })

    setColumns(columnsUpdated);

  };

  const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
  };

  return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>Things to do<span>soon!</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
          {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} addCard={addCard} />)}
        </section>
        <ColumnForm action={addColumn}></ColumnForm>
      </div>
  );
};

export default List;