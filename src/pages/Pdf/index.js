import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { Container, ContainerPdf, Experience, Courses } from './styles';

class ComponentToPrint extends React.Component {
	render() {
		return (
			<Container>
				<Link to="/" >
					<BsArrowLeft size={30} color="#555"/>
				</Link>
				<h1>VALDIR DA SILVA ALVES</h1>
				<h2>Objetivo</h2>

				<p>ESTÁGIO</p>

				<h2>Dados Pessoais</h2>
				<ul>
					<li><b>Nacionalidade: </b>Brasileiro</li>
					<li><b>Endereço: </b>Rua Lourival Portal da Silva Nº65A-Mauá-SP</li>
					<li><b>Telefone: </b>(11) 9 9544-5056</li>
					<li><b>Recados: </b>(11) 9 7406-8307 / Célia</li>
					<li><b>Data de Nascimento: </b>19/11/1986</li>
					<li><b>Estado Civil: </b>Casado</li>
					<li><b>Email: </b>valdiralves3000@gmail.com</li>
					<li><b>CNH Categoria: </b>AB</li>
				</ul>

				<h2>Escolaridade</h2>
				<ul>
					<li>Cursando Engenharia da Computação(EAD)</li>
				</ul>

				<h2>Cursos Extracurricular</h2>
				<Courses>

					<ul>
						<li>
							<p><span>Cursos:</span> SENAI</p>
							<p>Metrologia</p>
							<p>Informática</p>
							<p>Matemática Mecânica</p>
							<p>Fundamentos Logístico</p>
							<p>Lógica de Programação</p>
							<p>Desenho Técnico Mecânico</p>
							<p>Tecnologia da Informação</p>
							<p><b>Operador de Empilhadeira:</b> Reciclagem 2018</p>
						</li>

						<li>
							<p>Conhecimento básico</p>
							<p>JAVASCRIPT</p>
							<p>HTML</p>
							<p>CSS</p>
							<p>PYTHON</p>
							<p>MYSQL</p>
							<p>NODE</p>
							<p>REACT</p>
							<p>REACT - NATIVE</p>
						</li>

					</ul>
				</Courses>

				<h2>Experiência Profissional</h2>

				<Experience>
					<ul>
						<li><b>Empresa: </b>Compass Minerals</li>
						<li><b>Cargo: </b>Operador de Empilhadeira</li>
						<li><b>Período: </b>04/07/2019 a 28/10/2019</li>
					</ul>
					<ul>

						<li><b>Empresa: </b>CLO Usinagem</li>
						<li><b>Cargo: </b>Operador de Empilhadeira</li>
						<li><b>Período: </b>04/06/2018 a 13/03/2019</li>
					</ul>

					<ul>
						<li><b>Empresa: </b>Célere Logística</li>
						<li><b>Cargo: </b>Operador de Empilhadeira</li>
						<li><b>Período: </b>12/05/2011 a 08/11/2017</li>
					</ul>

					<ul>
						<li><b>Empresa: </b>Produquímica</li>
						<li><b>Cargo: </b>Operador de Empilhadeira</li>
						<li><b>Período: </b>25/06/2010 a 20/12/2010</li>
					</ul>

				</Experience>
			</Container>
		);
	}
}

const Example = () => {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<ContainerPdf>
			<ComponentToPrint ref={componentRef} />
		<button onClick={handlePrint}>Download</button>
		</ContainerPdf>
	);
};

export default Example;