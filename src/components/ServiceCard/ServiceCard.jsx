import './ServiceCard.scss';
import '../../styles/Typography.scss';

const ServiceCard = ({ cardImg, title, desc }) => {
    return (
        <div className="service-card__wrapper">
            <div className="service-card__image">
                <img
                    src={cardImg}
                    alt=""
                />
            </div>
            <div className="service-card__content">
                <div className="title service-card__title">{title}</div>
                <div className="service-card__desc">{desc}</div>
            </div>
            <div className="action-btn">
                <a
                    href="#!"
                    className="link__button primary"
                >
                    TRY IT NOW
                </a>
            </div>
        </div>
    );
};
export default ServiceCard;
