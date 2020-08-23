import styled from 'styled-components';
import { FaRegFilePdf } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;  
  box-shadow:  -1px 2px 2px 2px var(--shadow);
`;

export const Header = styled.header`
  position: relative;
  width: 100%;   
  padding: 2.5rem 2.0rem 5.0rem;

  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  
   box-shadow:  0 1px rgba(0, 0, 0, 0.2);

  > img {
    width: 15.0rem;
    border-radius: .7rem;
    margin-left: .5rem;
  }
  

  @media (max-width: 700px) {
    > img {
      display: none;
    }
  }
`;
export const HeaderContent = styled.div`
 max-width: 40.0rem; 

 @media (max-width: 700px) { 
   .icon {
     position: absolute;
     left: 90%;
     top: -20px;
   }
 }

 > p {
    color: var(--text);
    opacity: .8;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: justify;
    margin: 1.5rem 0;
    &:first-child {
      font-size: 1.6rem;
    }
  }  

  > h1 {
    color: var(--secondary);    
  }

 > a {
   text-decoration: none;
   color: var(--tertiary);
   padding: .5rem;
   border-radius: .3rem;
   border: 1px solid var(--tertiary);

 }

`;
export const Section = styled.section`
  box-shadow:  0 -1px var(--shadow);
  width: 100%;
  background: var(--quartenary);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;  
  padding: 2.5rem 2.0rem 5.0rem;

>img {
  width: 10.0rem;
}
 > ul {
   list-style: none;
   width: 50%;
   margin-left: 2.0rem;

  > h1 {
    color: var(--text);
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
    padding-left: 2.0rem;
    
    > span {
      text-shadow: -3px -13px var(--shadow);
    }
  }

  > li {
    position: relative;
    width: 100%;
    min-width: 300px;
    display: flex;
    align-items: center;
    padding: .5rem 0;  

    > span {
      color: var(--text);
      font-weight: 0;
    }

    > p {
      position: absolute;
      left: 4.5rem;
      color: #848684;     
    }  

    > a {
      text-decoration: none;
      color: var(--tertiary);
      padding: .5rem;
      border-radius: .3rem;
      border: 1px solid var(--tertiary);

 }
}
 }

 @media (max-width: 640px) {
   display: flex;
   flex-direction: column;

  

   > ul {
     width: 100%;

     > h1 {
       margin: 1.5rem;
     }
   }
 }

`;

export const ImgDoc = styled(FaRegFilePdf)`
  width: 2.0rem;
  color: #cecece;
`;

export const Courses = styled.section`
 box-shadow:  0 -1px var(--shadow);
 background: var(--primary);
 padding: 2.5rem 2.0rem 5.0rem;

 > h1 {
   color: var(--text);
   text-align: center;
   margin-bottom: 2.0rem;
   text-shadow: -5px -11px var(--shadow);
 }

 > p {
   position: relative;
   left: 50%;
   text-indent: 1.5rem;
   line-height: 1.5rem;
   transform: translateX(-50%);
   color: var(--text);
   opacity: .8;
   max-width: 35.0rem;
   text-align: justify;
 }

 > p + p {
   font-family: Clicker Script, cursive;
   font-size: 1.8rem;
   text-align: end;
   margin-top: 1.0rem;
 }

 > ul {
   width: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: auto 1fr;
   grid-area: 'title' 'text' ;
   grid-gap: 1.0rem;
   margin-top: 2.0rem;

   > li {
     
    list-style: none;
    background: var(--quartenary);
    color: var(--text);
    padding: 2.0rem;
    border-radius: .7rem;
    text-align: center;  
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);   

     > p {
       margin-top: 1.0rem;
       opacity: .5;
     }
   }
 }

 @media (max-width: 940px) {
   
   > ul {
     grid-template-columns: repeat(2, 1fr);
   }
 }

 @media (max-width: 700px) {
   > ul {
     grid-template-columns: repeat(1, 1fr);
   }
 }
`;

export const Experience = styled.section`
  
  background: var(--quartenary);
  padding: 2.5rem 2.0rem 5.0rem;
  box-shadow:  0 -1px var(--shadow);

  > h1 {
    color: var(--text);
    text-align: center;
    font-family: Archivo, cursive;    
    text-shadow: -5px -11px var(--shadow);
  }

  > ul {
    list-style: none;
    margin: 2.0rem 0;

    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-gap: 1.0rem;
    
   > li {
      background: var(--primary);
      padding: 2.0rem;
      border-radius: .7rem;
      box-shadow: 1px 1px rgba(0, 0, 0, 0.2);

      > h2 {
        color: var(--tertiary);
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 1.0rem;
        opacity: .8;
      }

      > p {
        position: relative;
        color: var(--text);
        line-height: 2.0rem;
        opacity: .8;

        > span {
          opacity: .7;
          position: absolute;
          left: 5.0rem;
        }
      }
    }
  }

  @media (max-width: 940px) {
   
    > ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    > ul {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      > li > p > span {
        position: relative;
        left: 1.0rem;
      } 
    }
  }
`;