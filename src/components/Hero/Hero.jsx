import './Hero.scss';

import heroImg from '../../assets/hero.png';
import arrowIcon from '../../assets/icons/arrow.svg';

import vector1 from '../../assets/vectors/vector1.svg';
import vector2 from '../../assets/vectors/vector2.svg';
import vector3 from '../../assets/vectors/vector3.svg';
import vector4 from '../../assets/vectors/vector4.svg';

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
            <img
                style={{ position: 'absolute', top: 200, right: 0, zIndex: -1 }}
                src={vector1}
                alt=""
            />
            <img
                style={{ position: 'absolute', top: 0, right: 200, zIndex: -1 }}
                src={vector2}
                alt=""
            />
            <img
                style={{
                    position: 'absolute',
                    top: '60%',
                    right: 150,
                    zIndex: -1,
                }}
                src={vector3}
                alt=""
            />
            <img
                style={{
                    position: 'absolute',
                    top: '60%',
                    lefto: 0,
                    zIndex: -1,
                }}
                src={vector4}
                alt=""
            />
        </section>
    );
};
export default Hero;
