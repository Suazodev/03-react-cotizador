import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SCHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;

const SCTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <SCHeader>
      <SCTitle>{title}</SCTitle>
    </SCHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
