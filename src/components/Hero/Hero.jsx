import './Hero.scss';

import heroImg from '../../assets/hero.png';
import arrowIcon from '../../assets/icons/arrow.svg';

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="hero__section">
                    <div className="hero__text">
                        <div className="hero__title">
                            <div>
                                <div className="highlight">Dive</div> Into The
                                Depths
                            </div>
                            <div>
                                Of{' '}
                                <div className="highlight">Virtual Reality</div>
                            </div>
                        </div>
                        <div className="hero__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore nisl tincidunt eget. Lectus mauris eros in
                            vitae .
                        </div>
                        <div className="hero__action">
                            <a
                                href="#!"
                                className="link__button primary"
                            >
                                BUILD YOUR WORLD
                            </a>
                            <img
                                src={arrowIcon}
                                alt="Go"
                            />
                        </div>
                    </div>
                    <div className="hero__img">
                        <div className="hero__img__wrapper">
                            <img
                                src={heroImg}
                                alt="Hero"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
