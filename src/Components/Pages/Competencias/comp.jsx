import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import './comp.css';

function Competencias() {
  return (
    <>
      <main className="container-Comp">

           <h1>Competências</h1>

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
        
        <section className="comp-estudando">
            <h2>Estou aprendendo:</h2>
        </section>
        
      </main>
  
    </>
  );
}

export default Competencias;