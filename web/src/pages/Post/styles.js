import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #000;
  width: 50%;
  height: fit-content;
  margin: 20px auto 0 auto;
  border-radius: 10px;
  text-align: center;
  padding-bottom: 30px;
`;

export const BlogPost = styled.div`
  margin: 0 auto;
  width: 80%;
  font-size: 22px;

  p {
    margin-top: 10px;
  }

  span {
    font-weight: bold;
  }
`;

export const Title = styled.h2``;
export const Author = styled.p``;
export const PublicationDate = styled.p``;
export const Content = styled.p`
  padding-top: 20px;
  text-align: justify;
  overflow-wrap: break-word;
`;
