import { ReactComponent as GithubIcen } from 'assets/img/github.svg';
import "./style.css";
function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/diogo0254jf/dsmovie">
                        <div className='dsmovie-contact-container'>
                            <GithubIcen />
                            <p className='dsmovie-contact-link'>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;