import './sobre.css';
import foto from "../../../assets/foto/foto.jpg";

function Sobre() {
  return (
    <main className="sobre-page">
      <div className="sobre">
        <h1>Sobre mim</h1>
        <p>
          Tenho 17 anos e sou apaixonada por <strong>tecnologia e programação</strong>.
          Estudo com foco no <strong>desenvolvimento de soluções digitais</strong>, criando
          interfaces interativas, intuitivas e acessíveis para web, computadores e dispositivos móveis.
          Busco constantemente <strong>evoluir meus conhecimentos</strong> para criar experiências eficientes
          e funcionais para os usuários.
        </p>
      </div>

      <div className="formacao">
        <h2 className="formacao-titulo">Formação Acadêmica</h2>
        <p>
          Atualmente sou <strong>Auxiliar em Desenvolvimento de Sistemas</strong>, cursando o
          último ano do Ensino Médio integrado ao técnico em Desenvolvimento de Sistemas. Tenho
          como objetivo ingressar em <strong>Ciência da Computação</strong>, para aprofundar minha
          base e compreender melhor o funcionamento dos sistemas computacionais, posteriormente me
          especializar em <strong>Engenharia de Software</strong>, com foco na criação de sistemas
          bem estruturados e eficientes, e futuramente expandir meus conhecimentos com
          <strong>Inteligência Artificial</strong>, explorando o desenvolvimento de soluções mais inovadoras.
        </p>
      </div>

      <div className="foto">
        <img src={foto} alt="Foto" />
      </div>
    </main>
  );
}

export default Sobre;