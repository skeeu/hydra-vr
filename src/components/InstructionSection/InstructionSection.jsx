import './InstructionSection.scss';

const InstructionSection = ({ icon, title, subtitle }) => {
    return (
        <div className="instruction__section">
            <div className="instruction__section-icon">
                <img
                    src={icon}
                    alt="Location"
                />
            </div>
            <div className="instruction__section-text">
                <div className="instruction__section-title">{title}</div>
                <div className="instruction__section-subtitle">{subtitle}</div>
            </div>
        </div>
    );
};
export default InstructionSection;
