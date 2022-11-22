import { useState } from 'react';
import classNames from 'classnames/bind';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import ModalVisit from '~/components/ModalVisit';
import ScrollButton from '~/components/ScrollButton';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const CONTACTS = {
    address: '8494 Signal Hill Road Manassas, VA, 20110',
    timeWork: 'Mon-Fri 08:00 AM - 05:00 PM',
    phone: '1 (800) 765-43-21',
    numberBoughtProduct: '4',
};

function DefaultLayout({ Page }) {
    const [showModal, setShowModal] = useState(false);

    const handleToggleShowModal = () => {
        setShowModal(!showModal);
        console.log('Toggle modal');
    };

    return (
        <div className={cx('wrapper')}>
            {showModal && <ModalVisit onClick={handleToggleShowModal} />}
            <Header infoContact={CONTACTS} onClick={handleToggleShowModal} />
            <div className={cx('container')}>
                <Page onClick={handleToggleShowModal} />
            </div>
            <Footer infoContact={CONTACTS} />
            <ScrollButton />
        </div>
    );
}

export default DefaultLayout;
