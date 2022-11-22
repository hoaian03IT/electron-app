import { faCheck, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import routes from '~/config/routes';

import styles from './Footer.module.scss';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icon';
import SubscribeForm from '../SubscribeForm';

const cx = classNames.bind(styles);

function Footer({ infoContact }) {
    return (
        <div className={cx('wrapper')}>
            <SubscribeForm className={cx('subscribe-form')} />
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <div className={cx('info-detail')}>
                        <div className={cx('additional')}>
                            <Link to={routes.home} className={cx('logo')}>
                                <img className={cx('logo-image')} src={images.logoDark} alt="" />
                                <h1 className={cx('logo-text')}>Electron</h1>
                            </Link>
                            <div className={cx('description')}>
                                <p>Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.</p>
                            </div>
                        </div>
                        <div className={cx('info-related')}>
                            <div className={cx('list')}>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.home}>
                                        Home
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.aboutUs}>
                                        About Us
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.services}>
                                        Services
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.prices}>
                                        Prices
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.gallery}>
                                        Gallery
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.shop}>
                                        Shop
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.faq}>
                                        FAQ
                                    </Link>
                                </div>
                                <div className={cx('item')}>
                                    <FontAwesomeIcon className={cx('primary-icon')} icon={faCheck} />
                                    <Link className={cx('link')} to={routes.contacts}>
                                        Contacts
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('contact-info')}>
                                <div className={cx('contact-list')}>
                                    <div className={cx('info-item')}>
                                        <FontAwesomeIcon className={cx('primary-icon')} icon={faLocationDot} />
                                        <span className={cx('detail')}>{infoContact.address}</span>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <FontAwesomeIcon className={cx('primary-icon')} icon={faClock} />
                                        <span className={cx('detail')}>{infoContact.timeWork}</span>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <a href={'tel:' + infoContact.phone}>
                                            <FontAwesomeIcon className={cx('primary-icon')} icon={faPhone} />
                                        </a>
                                        <span className={cx('detail')}>
                                            <a className={cx('to-number')} href={'tel:' + infoContact.phone}>
                                                {infoContact.phone}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('map')}>
                        <iframe
                            className={cx('google-map')}
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15337.009885554939!2d108.22590134863911!3d16.05238323672435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d520b59e33%3A0xc19db91df516ad12!2zU2nDqnUgdGjhu4sgxJBp4buHbiBtw6F5IFhBTkg!5e0!3m2!1svi!2s!4v1668333522342!5m2!1svi!2s"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className={cx('copyright')}>
                    <p className={cx('copyright-text')}>© 2022 Electrical Services. All Rights Reserved.</p>
                    <div className={cx('social-network')}>
                        <a className={cx('twitter')} href="/">
                            <TwitterIcon />
                        </a>
                        <a className={cx('facebook')} href="/">
                            <FacebookIcon />
                        </a>
                        <a className={cx('instagram')} href="/">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
