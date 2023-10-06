import './UsedTechologies.scss';

import usedTechImg from '../../assets/used-tech.jfif';
import unreal from '../../assets/brands/unreal.svg';
import unity from '../../assets/brands/unity.svg';
import oculus from '../../assets/brands/oculus.svg';
import vive from '../../assets/brands/vive.svg';

const UsedTechologies = () => {
    return (
        <section className="used-tech">
            <div className="container">
                <div className="used-tech__header">
                    <img
                        src={usedTechImg}
                        alt=""
                    />
                    <div className="used-tech__header__inner">
                        <div className="title">TECHNOLOGIES & HARDWARE</div>
                        <div className="subtitle">USED BY HYDRA VR.</div>
                    </div>
                </div>
                <ul className="used-tech__list">
                    <li>
                        <img
                            src={unreal}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            src={unity}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            src={oculus}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            src={vive}
                            alt=""
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default UsedTechologies;
