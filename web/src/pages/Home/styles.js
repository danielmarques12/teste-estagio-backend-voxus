import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  width: 35%;
  margin: 15px auto 0 auto;
`;

export const Post = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Item = styled.div`
  background-color: #fff;
  width: 200px;
  height: 150px;
  padding: 10px;
  margin: 10px auto;
  border-radius: 7.5px;
  cursor: pointer;
`;
