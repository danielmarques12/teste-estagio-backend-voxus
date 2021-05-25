import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 28px 0px 24px;
  background: #fff;
  height: 75px;

  nav {
    text-align: center;
    display: flex;
    align-items: center;
    height: 75px;

    a {
      text-decoration: none;
      font-size: 23px;
      color: #000;
      font-weight: 400;

      ul {
        cursor: pointer;
        li {
          list-style-type: none;
          padding: 30px 35px;
        }
      }
    }

    ul:hover {
      background: #f7f7f7;
    }
  }
`;
