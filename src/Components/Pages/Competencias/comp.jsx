import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import './comp.css';

function Competencias() {
  return (
    <>
      <main className="container-Comp">
        <h1>Competências</h1>

        <section className="Habilidades">
          <div className="CardHTML">
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div className="CardCSS">
            <FaCss3Alt />
            <p>CSS</p>
          </div>
          <div className="CardJS">
            <FaJsSquare />
            <p>JavaScript</p>
          </div>
          <div className="CardReact">
            <FaReact />
            <p>React</p>
          </div>
          <div className="CardSQL">
            <GrMysql />
            <p>MySQL</p>
          </div>
        </section>

        <section className="estudando">
          <h2>Estou estudando no momento:</h2>

          <div className="Habilidades">
            <div className="CardPHP">
              <SiPhp />
              <p>PHP</p>
            </div>

            <div className="CardNode">
              <FaNodeJs />
              <p>Node.js</p>
              <p className="parentese">(Aprofundando)</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Competencias;