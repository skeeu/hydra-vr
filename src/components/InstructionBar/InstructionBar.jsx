import InstructionSection from '../InstructionSection/InstructionSection';
import './InstructionBar.scss';

import locationIcon from '../../assets/icons/location.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/mail.svg';

const InstructionBar = () => {
    return (
        <section id="instruction">
            <div className="container">
                <div className="instruction">
                    <InstructionSection
                        icon={locationIcon}
                        title={'Pay Us a Visit'}
                        subtitle={'Union St, Seattle, WA 98101, United States'}
                    />
                    <InstructionSection
                        icon={phoneIcon}
                        title={'Give Us a Call'}
                        subtitle={'(110) 1111-1010'}
                    />
                    <InstructionSection
                        icon={mailIcon}
                        title={'Send Us a Message'}
                        subtitle={'Contact@HydraVTech.com'}
                    />
                </div>
            </div>
        </section>
    );
};
export default InstructionBar;
