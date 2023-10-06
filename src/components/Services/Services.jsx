import './Services.scss';
import '../../styles/Typography.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceCard from '../ServiceCard/ServiceCard';

import cardOneImg from '../../assets/cards/card1.jpg';
import cardTwoImg from '../../assets/cards/card2.jpg';
import cardThreeImg from '../../assets/cards/card3.jpg';
import cardFourImg from '../../assets/cards/card4.jpg';

const Services = () => {
    return (
        <section>
            <SectionHeader
                title={'WHY BUILD'}
                subtitle={'WITH HYDRA?'}
                desc={
                    'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
                }
            />
            <div className="container">
                <div className="services__list">
                    <ServiceCard
                        cardImg={cardOneImg}
                        title={'SIMULATION'}
                        desc={
                            'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
                        }
                    />
                    <ServiceCard
                        cardImg={cardTwoImg}
                        title={'EDUCATION'}
                        desc={
                            'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
                        }
                    />
                    <ServiceCard
                        cardImg={cardThreeImg}
                        title={'SELF-CARE'}
                        desc={
                            'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
                        }
                    />
                    <ServiceCard
                        cardImg={cardFourImg}
                        title={'OUTDOOR'}
                        desc={
                            'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
                        }
                    />
                </div>
            </div>
        </section>
    );
};
export default Services;
