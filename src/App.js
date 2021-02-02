import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import { useState } from 'react';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const SCContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const SCFormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSumary] = useState({
    price: 0,
    data: {
      branding: '',
      plan: '',
      year: '',
    },
  });
  const [loading, setLoading] = useState(false);
  const { price, data } = summary;
  return (
    <SCContainer>
      <Header title={'Cotizador de coches'} />;
      <SCFormContainer>
        <Form setSumary={setSumary} setLoading={setLoading} />
        <Summary data={data} />
        {loading ? <Spinner /> : null}
        {!loading ? <Result price={price} /> : null}
      </SCFormContainer>
    </SCContainer>
  );
}

export default App;
