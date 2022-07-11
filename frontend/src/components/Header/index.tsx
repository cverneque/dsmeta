import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt="DsMeta" />
                <h1>DsMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/cristian-camillo-verneque-66655b24/">@CVerneque</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
