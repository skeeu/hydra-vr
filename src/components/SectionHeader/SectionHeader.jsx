import './SectionHeader.scss';
import '../../styles/Typography.scss';

const SectionHeader = ({ title, subtitle, desc }) => {
    return (
        <div className="container">
            <div className="section__header">
                <div className="section__header-heading">
                    <div className="section__header-text">
                        <div className="title">{title}</div>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </div>
                <div className="section__header-desc">{desc}</div>
            </div>
        </div>
    );
};
export default SectionHeader;
