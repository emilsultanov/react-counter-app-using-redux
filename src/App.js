import React from 'react';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
   return (
      <div className="App">
         <Container>
            <Row>
               <Col md={5} className='mx-auto'>
                  <Card className='text-center mt-5'>
                     <Card.Header>
                        <h5 className='mb-0'>React Counter App Using Redux</h5>
                     </Card.Header>
                     <Card.Body>
                        <Card.Text>
                           <Counter />
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer className="text-muted">
                        <DecreaseCounter />
                        <IncreaseCounter />
                        <IncreaseByTwoCounter />
                     </Card.Footer>
                  </Card>
               </Col>
            </Row>

         </Container>

      </div>
   );
}

export default App;
