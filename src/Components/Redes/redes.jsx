import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import './redes.css';

function RedesSociais() {
  return (
    <div className="social-links">
      <a href="https://github.com/Gauwks" target="_blank" rel="noreferrer"> <AiFillGithub className="icone" /> </a>
      <a href="https://www.linkedin.com/in/maria-clara-da-silva-jacinto-71641a354/" target="_blank" rel="noreferrer"> <BsLinkedin className="linkedin" /> </a>
    </div>
  );
}

export default RedesSociais; 