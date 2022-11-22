import classNames from 'classnames/bind';
import BackgroundPathPage from '~/components/BackgroundPathPage';
import AppointmentContent from '~/components/AppointmentContent';
import styles from './AboutUs.module.scss';

const cx = classNames.bind(styles);

function AboutUs({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <BackgroundPathPage pathCurrent="About Us" />
                <AppointmentContent onClick={onClick} />
            </div>
        </div>
    );
}

export default AboutUs;
