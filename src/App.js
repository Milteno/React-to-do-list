import Hero from './components/Hero/Hero.js'
import SearchForm from './components/SearchForm/SearchForm.js'
import List from './components/List/List.js'
import Container from './components/Container/Container.js'

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};

export default App;