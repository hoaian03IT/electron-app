import { faAward, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './FirstContent.module.scss';

const cx = classNames.bind(styles);
function FirstContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <p className={cx('highlight')}>Over 25 Years Experience</p>
                <h1 className={cx('title')}>Experienced and Reliable Electrical Contractors</h1>
                <p className={cx('description')}>
                    We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. We started out in 2002.
                    <br />
                    <br /> We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly
                    trained and courteous technician that is dependable and always trustworthy.
                </p>
                <div className={cx('proof')}>
                    <div className={cx('proof-item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faUserGraduate} />
                        </div>
                        <div className={cx('info')}>
                            <h1 className={cx('number')}>24</h1>
                            <p className={cx('text')}>
                                Skilled & Certified <br /> Electricians
                            </p>
                        </div>
                    </div>
                    <div className={cx('proof-item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faAward} />
                        </div>
                        <div className={cx('info')}>
                            <h1 className={cx('number')}>10</h1>
                            <p className={cx('text')}>
                                Skilled & Certified <br /> Electricians
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className={cx('img-background-first')} src={images.pictureLayout1} alt="" />
            <img className={cx('img-background-second')} src={images.pictureLayout2} alt="" />
        </div>
    );
}

export default FirstContent;
