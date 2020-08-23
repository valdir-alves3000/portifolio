import styled from 'styled-components';
import { FaRegFilePdf } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;


.nigthHeader {
background: #f0f0f5;
}

 .nigthHeader p {
color: #333;
}



`;

export const Header = styled.header`
  width: 100%;
  height: 25.5rem;  
  padding: 2.5rem 2.0rem 5.0rem;

  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;



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

 > p {
    color: var(--color-text);
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
    color: var(--color-secondary);    
  }

 > a {
   text-decoration: none;
   color: var(--color-tertiary);
   padding: .5rem;
   border-radius: .3rem;
   border: 1px solid var(--color-tertiary);

 }

`;
export const Section = styled.section`
  width: 100%;
  background: var(--color-quartenary);
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
    color: var(--color-text);
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
    padding-left: 2.0rem;
    
    > span {
      text-shadow: -3px -13px rgba(255, 255, 255, .1);
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
      color: var(--color-text);
      font-weight: 0;
    }

    > p {
      position: absolute;
      left: 4.5rem;
      color: #848684;     
    }  

    > a {
      text-decoration: none;
      color: var(--color-tertiary);
      padding: .5rem;
      border-radius: .3rem;
      border: 1px solid var(--color-tertiary);

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

 background: #222;
 padding: 2.5rem 2.0rem 5.0rem;

 > h1 {
   color: var(--color-text);
   text-align: center;
   margin-bottom: 2.0rem;
 }

 > p {
   position: relative;
   left: 50%;
   text-indent: 1.5rem;
   line-height: 1.5rem;
   transform: translateX(-50%);
   color: var(--color-text);
   opacity: .6;
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
    background: var(--color-quartenary);
    color: var(--color-text);
    padding: 2.0rem;
    border-radius: .7rem;
    text-align: center;     

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
  
  background: var(--color-primary);
  padding: 2.5rem 2.0rem 5.0rem;

  > h1 {
    color: var(--color-text);
    text-align: center;
    font-family: Archivo, cursive;

  }

  > ul {
    list-style: none;
    margin: 2.0rem 0;

    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-gap: 1.0rem;

   > li {
      background: var(--color-quartenary);
      padding: 2.0rem;
      border-radius: .7rem;
      

      > h2 {
        color: var(--color-tertiary);
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 1.0rem;
        opacity: .7;
      }

      > p {
        position: relative;
        color: var(--color-text);
        line-height: 2.0rem;
        opacity: .7;

        > span {
          opacity: .5;
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
