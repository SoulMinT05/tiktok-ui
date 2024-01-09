import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as getSuggestUser from '~/services/getSuggestUser';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const page = 7; // render ra 4 account
    const per_page = 1; // là trang thứ 8 trong api
    const [suggestUser, setSuggestUser] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getSuggestUser.getSuggestUser(page, per_page);
            setSuggestUser(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestUser.map((item, index) => (
                <AccountItem key={index} item={item} />
            ))}

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
