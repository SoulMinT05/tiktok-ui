import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);

function AccountPreview({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={item.avatar} alt="" />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{item.nickname}</strong>
                    {item.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <p
                    className={cx('name')}
                >{`${item.last_name} ${item.first_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>
                        {item.followers_count}{' '}
                    </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{item.likes_count} </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
