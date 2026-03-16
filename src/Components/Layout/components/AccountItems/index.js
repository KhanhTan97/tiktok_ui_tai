import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/630498696_122172251066749816_2829816107203028667_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHCgqACzmkqnjaDIkwjJSw-idrN0EgEE1-J2s3QSAQTX3VpfHjqVX1gSglBZJ7yaVxDUQTV5NH4yqw2R1-6bkxD&_nc_ohc=_-BKg2exJIcQ7kNvwE0FLpH&_nc_oc=AdnAG374UR5ZxBjZd0Cn3jy3Nfq75XQ4kgvnTOAPVYQ_3yuWxHA4bUdU47NdKNPARus&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=h5B1upqqgtVHWjDIq8PWCg&_nc_ss=8&oh=00_AfyuzFQSbO7mhfy7LFvyrd1sNIRjj2Tr5EVsgJLCDCrzlw&oe=69B963AD"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>NguyenVanA</span>
      </div>
    </div>
  );
}

export default AccountItem;
