import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  background: #fff;
  width: 600px;
  height: 370px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  padding-top: 20px;
`;

export const TextArea = styled.textarea`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 92.5%;
  height: 200px;
  padding: 15px;
  font-size: 17px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  color: #1d2129;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 92.5%;
  height: 50px;
  padding: 15px;
  font-size: 17px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  color: #1d2129;
`;

export const SubmitInput = styled(Input)`
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #494343;
  cursor: pointer;

  &:hover {
    background-color: #363434;
  }
`;

export const Text = styled.div`
  padding: 50px;

  h3 {
    color: #222;
    font-size: 24px;
  }
`;
