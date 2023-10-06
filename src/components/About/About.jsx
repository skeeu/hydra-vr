import SectionHeader from '../SectionHeader/SectionHeader';
import './About.scss';
import '../../styles/Typography.scss';

import aboutImg from '../../assets/about.png';

import vector1 from '../../assets/vectors/about1.svg';
import vector2 from '../../assets/vectors/about2.svg';

const About = () => {
    return (
        <section style={{ position: 'relative' }}>
            <SectionHeader
                title={'INTRODUCTION'}
                subtitle={'TO HYDRA VR'}
                desc={
                    'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
                }
            />
            <div className="container">
                <div className="about__wrapper">
                    <div className="about-image">
                        <img
                            src={aboutImg}
                            alt="about"
                        />
                    </div>
                    <div className="about-content">
                        <div className="about-content__top">
                            <div className="title">about</div>
                            <div className="subtitle">HYDRA VR</div>
                        </div>
                        <div className="about-text">
                            Eget mi proin sed libero enim sed faucibus turpis.
                            Nisl rhoncus mattis rhoncus urna neque viverra
                            justo. Vivamus at augue eget arcu dictum. Ultrices
                            gravida dictum fusce ut placerat orci. Aenean et
                            tortor at risus viverra adipiscing at in. Mattis
                            aliquam faucibus purus in massa. Est placerat in
                            egestas erat imperdiet sed. Consequat semper viverra
                            nam libero justo laoreet sit amet. Aliquam etiam
                            erat velit scelerisque in dictum non consectetur a.
                            Laoreet sit amet cursus sit amet. Vel eros donec ac
                            odio tempor orci dapibus. Sem nulla pha retra diam
                            sit amet nisl suscipit adipiscing bibendum. Leo a
                            diam sollicitudi n tempor.
                        </div>
                        <div>
                            <a
                                href="#!"
                                className="link__button primary"
                            >
                                LET’S GET IN TOUCH
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={vector1}
                alt=""
                style={{ position: 'absolute', zIndex: -1, top: '40%' }}
            />
            <img
                src={vector2}
                alt=""
                style={{ position: 'absolute', zIndex: -1, bottom: '10%' }}
            />
        </section>
    );
};
export default About;
