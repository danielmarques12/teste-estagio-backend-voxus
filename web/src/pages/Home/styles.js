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
  height: 125px;
  width: 200px;
  padding: 10px;
  margin: 10px auto;
  border-radius: 7.5px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ButtonModel = styled.button`
  margin-top: 5px;
  height: 25px;
  width: 55px;
  color: #fff;
  border-radius: 5px;
  border: #fff;
`;

export const RedirectPost = styled(ButtonModel)`
  background-color: #70c0d8;
`;

export const DeletePost = styled(ButtonModel)`
  background-color: #e91717;
`;
export const EditPost = styled(ButtonModel)`
  background-color: #3f2e2e;
`;
