import styled from '@emotion/styled';
import { useState } from 'react';
import { GetYearDifference, GetBrandingDifference, getPlanDifference } from '../helper';
import PropTypes from 'prop-types'

const SCDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const SCLabel = styled.label`
  flex: 0 0 100px;
`;
const SCelect = styled.select`
  display: block;
  width: 100%auto;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;
const SCInputRadio = styled.input`
  margin: 0 1rem;
`;
const SCButton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;
const SCError = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%auto;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setSumary, setLoading }) => {
  const [data, setData] = useState({
    branding: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState(false);
  const { branding, year, plan } = data;
  const getFormData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleInsurance = (e) => {
    e.preventDefault();
    if (branding.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    let base = 2000;
    const difference = GetYearDifference(year);
    base -= (difference * 3 * base) / 100;
    base = GetBrandingDifference(branding) * base;
    base = +parseFloat(getPlanDifference(plan) * base).toFixed(2);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSumary({
        price: base,
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleInsurance}>
      {error ? <SCError>Todos los campos son obligatorios</SCError> : null}
      <SCDiv>
        <SCLabel>Marca</SCLabel>
        <SCelect name="branding" value={branding} onChange={getFormData}>
          <option value="">-- Seleccione --</option>
          <option value="american">Americano</option>
          <option value="european">Europeo</option>
          <option value="asian">Asiático</option>
        </SCelect>
      </SCDiv>
      <SCDiv>
        <SCLabel>Año</SCLabel>
        <SCelect name="year" value={year} onChange={getFormData}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </SCelect>
      </SCDiv>
      <SCDiv>
        <SCLabel>Plan</SCLabel>
        <SCInputRadio type="radio" name="plan" value="basic" checked={plan === 'basic'} onChange={getFormData} />
        Básico
        <SCInputRadio type="radio" name="plan" value="complete" checked={plan === 'complete'} onChange={getFormData} />
        Completo
      </SCDiv>
      <SCButton type="submit">Cotizar</SCButton>
    </form>
  );
};

Form.propTypes = {
  setSumary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}

export default Form;
