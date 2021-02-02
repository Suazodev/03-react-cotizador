import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const SCMessage = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const SCResultPrice = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const SCPrice = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;
const Result = ({ price }) => {
  return price === 0 ? (
    <SCMessage>Elige marca, año y tipo de seguro</SCMessage>
  ) : (
    <SCResultPrice>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition classNames="resultado" key={price} timeout={{ enter: 500, exit: 500 }}>
          <SCPrice>El total es: <span>{price}</span>€</SCPrice>
        </CSSTransition>
      </TransitionGroup>
    </SCResultPrice>
  );
};

Result.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Result;
