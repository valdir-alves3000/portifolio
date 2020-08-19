import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: 10px auto ;
  
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2), -2px -2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px 40px;
  color: #353430;
  background: #fff;

  > a {
    position: fixed;
    left: 5px;
    color: #e22240;
    opacity: .7; 

    &:hover {
      opacity: 1;
    }   
  }

  > p {
    padding: 0 20px;
    margin-bottom: 10px;    
  }

  > h1, h2 {
    border: 1px solid #eee;
  border-radius: 8px;
  margin: 25px 0;
  padding: 10px;
  color: #333;
  }

  > h1 {
  text-align: center;
}

> ul {

  > li {
    list-style: none;
    padding: 0 20px;
    margin-bottom: 10px;    
  }
}

@media (max-width: 700px) {
  width: 100%;
  box-shadow: none;
}
`;

export const Courses = styled.div`  
 
  > ul {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  overflow: hidden;   
  
    > li {
      list-style: none;
      box-shadow: 1px 0px #dedede; 
      margin: 10px 0;

      > p {
      padding: 0 20px;
      margin-bottom: 10px; 
      
      
        &:first-child {
          font-weight: 600;
          padding-bottom: 12px;
          color: #00002f;
        }
      }
    }
  }

  @media only screen and (max-width: 680px) {
  box-shadow: none;
  display: block;
 > ul {
      box-shadow: none;
      display: block;
      padding-bottom: 10px;

      >li {
        margin-bottom: 25px;
      }
  }
}
`;

export const Experience = styled.div`  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  overflow: hidden; 
  
  > ul {
  box-shadow: 1px 0px #dedede;
 
  margin: 10px 0;

  > li {
    list-style: none;
    padding: 0 20px;
    margin-bottom: 10px;    
  }
}

@media only screen and (max-width: 680px) {
  box-shadow: none;
  display: block;
 > ul {
      box-shadow: none;
      display: block;
      padding-bottom: 10px;
  }
}
  
`; 
