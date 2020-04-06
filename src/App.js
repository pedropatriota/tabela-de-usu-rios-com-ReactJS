import React, {useState} from 'react';
import GlobalStyle from './styles/Global'
import Container from './components/Container';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  const[showModal, setShowModal] = useState(false) 
  const onClose = () => setShowModal(false);
  const onOpen = () => setShowModal(true);

  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
        <Container> 
          <Navbar 
            onOpen= {onOpen}
          />
          <Table />
          <Pagination />
          {showModal &&
            <Modal 
            onClose= {onClose}            
            />
          } 
          <Footer />         
      </Container>      
    </StylesProvider>
  );
}

export default App;
