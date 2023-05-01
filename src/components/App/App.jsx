import { Container, Title } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';


const App = () => {
  
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    </Container>
  );
};

export default App;
