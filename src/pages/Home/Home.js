import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import WrapperContainer from '~/components/Container/Container';
import Slider from '~/components/Slider';
import FirstContent from './FirstContent/FirstContent';
import images from '~/assets/images';

import styles from './Home.module.scss';
import FormContent from '~/components/FormContent';
import AppointmentContent from '~/components/AppointmentContent';
import LastContent from './LastContent';

const DATA_FIRST_CONTENT = [
    {
        backgroundImage: images.picSlideInfo1,
        title: 'Commercial',
        description:
            'We offer the highest level of responsiveness and reliability, including on-line job management and reporting. Our highly experienced contractors across the nation ensure that your premises are always maintained and compliant.',
        firstIcon: <FontAwesomeIcon icon={faMinus} />,
        secondIcon: <FontAwesomeIcon icon={faPlus} />,
    },
    {
        backgroundImage: images.picSlideInfo2,
        title: 'Industrial',
        description:
            'We offer the highest level of responsiveness and reliability, including on-line job management and reporting. Our highly experienced contractors across the nation ensure that your premises are always maintained and compliant.',
        firstIcon: <FontAwesomeIcon icon={faMinus} />,
        secondIcon: <FontAwesomeIcon icon={faPlus} />,
    },
    {
        backgroundImage: images.picSlideInfo3,
        title: 'Residential',
        description:
            'We offer the highest level of responsiveness and reliability, including on-line job management and reporting. Our highly experienced contractors across the nation ensure that your premises are always maintained and compliant.',
        firstIcon: <FontAwesomeIcon icon={faMinus} />,
        secondIcon: <FontAwesomeIcon icon={faPlus} />,
    },
];

const DATA_SLIDERS = [
    {
        img: images.picSlider1,
        titleFirst: 'Keep Your Wired',
        titleSecond: "We've the Current Specialist",
    },
    {
        img: images.picSlider2,
        titleFirst: 'Make Our Clients Happier',
        titleSecond: 'Best Services for Your Family',
    },
    {
        img: images.picSlider3,
        titleFirst: 'We Can Light Everything',
        titleSecond: 'Nothing is Impossible for Us',
    },
];

const cx = classNames.bind(styles);

function Home({ onClick }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <WrapperContainer>
                    <Slider data={DATA_SLIDERS} autoPlay transitionTime="500" infiniteLoop FormContent={<FormContent />} />
                    <FirstContent data={DATA_FIRST_CONTENT} />
                    <AppointmentContent onClick={onClick} />
                    <LastContent />
                </WrapperContainer>
            </div>
        </>
    );
}

export default Home;
