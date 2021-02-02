import styled from '@emotion/styled';
import { upperCase } from '../helper';
import PropTypes from 'prop-types';

const SCSummaryContent = styled.div`
  padding: 1rem;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Summary = ({ data }) => {
  const { branding, year, plan } = data;

  if (branding === '' || year === '' || plan === '') return null;
  return (
    <SCSummaryContent>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {upperCase(branding)}</li>
        <li>Año: {upperCase(year)}</li>
        <li>Plan: {upperCase(plan)}</li>
      </ul>
    </SCSummaryContent>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Summary;
