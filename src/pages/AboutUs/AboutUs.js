import classNames from 'classnames/bind';
import BackgroundPathPage from '~/components/BackgroundPathPage';
import AppointmentContent from '~/components/AppointmentContent';
import styles from './AboutUs.module.scss';
import FirstContent from './FirstContent';

const cx = classNames.bind(styles);

function AboutUs({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <BackgroundPathPage pathCurrent="About Us" />
                <FirstContent />
                <AppointmentContent onClick={onClick} />
            </div>
        </div>
    );
}

export default AboutUs;
