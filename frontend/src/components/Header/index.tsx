import logo from '../../assets/img/logo.svg' ;

import './styles.css';

function Header() {
    return (
        <header>
        <div class="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>Curso de REACT </h1>
            <h2>FRONTEND FINISHED</h2>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/douglassouza_rs"> DOUGLAS SOUZA</a>
            </p>
        </div>
    </header>
    )
  }
  
  export default Header;
  

