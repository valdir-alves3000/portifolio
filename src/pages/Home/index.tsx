import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data';
import Switch from 'react-switch';

import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { DiHtml5 } from 'react-icons/di';
import { FaCss3, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import perfilImg from '../../assets/perfil.png';

import {
  Container, Header, HeaderContent,
  Section, ImgDoc, Courses, Experience
} from './styles';

interface Props {
  e: string;
}

const Home: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [page, setPage] = useState(1);

  function handleNext() {
    const maxPage = Math.ceil(Data.length / 3);

    if (page >= maxPage) {
      setPage(maxPage);
    } else {
      setPage(prev => prev + 1);
    }
  }

  function handlePrev() {

    if (page <= 1) {
    } else {
      setPage(prev => prev - 1);
    }
  }

  return (
    <Container className={!checked ? 'ligth' : ''}>
      <Header>
        <HeaderContent>
          <Switch className="icon"
            onChange={() => {
              setChecked(prev => !prev);
            }}
            checked={checked ? true : false}
            checkedIcon={<IoIosMoon color={'#232423'} style={{ width: 30, height: 30 }} />}
            uncheckedIcon={<IoIosSunny color={'#fff'} style={{ width: 30, height: 30, marginLeft: 2 }} />}
            height={30}
            width={60}
            handleDiameter={25}
            offColor={'#232423'}
            onHandleColor={'#232423'}
            offHandleColor={'#fff'}
            onColor={'#fff'}
          />

          <p>Hello</p>
          <h1>I'm Valdir</h1>
          <p>Estudante de Engenharia da Computação pela UNIVESP (Universidade Virtual do Estado de São Paulo.)</p>

          <Link to="" >HERE ME</Link>
        </HeaderContent>
        <img src={perfilImg} alt="" />
      </Header>
      <Section>
        <img src={perfilImg} alt="" />

        <ul>
          <h1><span>About</span> Me</h1>
          <li>
            <span>Name:</span>
            <p>Valdir da Silva Alves</p>
          </li>

          <li>
            <span>Birth:</span>
            <p>19/11/1986</p>
          </li>

          <li>
            <span>Adress:</span>
            <p>Jardim Zaira, Mauá-SP</p>
          </li>

          <li>
            <span>E-mail:</span>
            <p>valdiralves3000@gmail.com</p>
          </li>

          <li>
            <span>Phone:</span>
            <p>11 9 9544-5056</p>
          </li>

          <li>
            <Link to="/pdf" >
              <ImgDoc />
           Curriculo
           </Link>
          </li>

        </ul>
      </Section>

      <Courses >
        <h1>Basic Knowledge</h1>

        <p>Ao nos afastarmos dos outros ao nosso redor e buscarmos o sucesso isoladamente, acabamos não apenas nos desconectando dos que nos cercam, mas limitando o que podemos alcançar.</p>
        <p>"Shawn Achor, 2018"</p>

        <ul>
          <li><IoLogoJavascript size={40} color="#f7df1e" /><p>Javascript</p></li>
          <li><IoLogoNodejs size={40} color="#82bb04" /><p>Node Js</p></li>
          <li><DiHtml5 size={40} color="#f0582f" /><p>Html</p></li>
          <li><FaCss3 size={40} color="#007bc4" /><p>Css</p></li>
          <li><FaReact size={40} color="#00d8ff" /><p>React</p></li>
          <li><GrMysql size={40} color="#005f8c" /><p>MySQL</p></li>
        </ul>
      </Courses>

      <Experience>
        <h1>Experience</h1>
        <ul>
          {Data.map((item, index) => {
              return (
                <li>
                  <h2>{item.periodo}</h2>
                  <p>Empresa:
                    <span>
                      {item.empresa}
                    </span></p>
                  <p>Cargo: 
                    <span>
                     {item.cargo}
                     </span>
                  </p>
                </li>
           );
           }
          )}
          <li>
            <span onClick={handlePrev}><BsChevronCompactLeft /></span>
            <span onClick={handleNext}><BsChevronCompactRight /></span>
          </li>

        </ul>
      </Experience>

    </Container>
  );
}

export default Home;
