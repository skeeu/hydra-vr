import './Header.scss';
import '../../styles/LinkButton.scss';
import logoImg from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__body">
                    <div className="header__logo">
                        <img
                            src={logoImg}
                            alt="HYDRA"
                        />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#!">ABOUT</a>
                            </li>
                            <li>
                                <a href="#!">SERVICES</a>
                            </li>
                            <li>
                                <a href="#!">TECHNOLOGIES</a>
                            </li>
                            <li>
                                <a href="#!">HOW TO</a>
                            </li>
                        </ul>
                        <div className="action__links">
                            <a
                                href="#!"
                                className="link__button"
                            >
                                contact us
                            </a>
                            <a
                                href="#!"
                                className="link__button primary"
                            >
                                join us
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
