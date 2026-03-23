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
        src="https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/633922575_122173117364749816_6486208440438556685_n.jpg?stp=cp6_dst-jpg_s160x160_tt6&_nc_cat=100&ccb=1-7&_nc_sid=d11e91&_nc_eui2=AeEV1iMQ18oWsVDc-uEe12gvOIRGwf-rKPU4hEbB_6so9U4BkJRB808lkQ9PaSl5lrXrvmkhMFZGhDvXffOPvXvT&_nc_ohc=m1GFX015EuIQ7kNvwF6_7JD&_nc_oc=AdpdOL4QJHI18oiQQyOxztaOXhW4tv871WsWv52nz2oV6XarJXqiKO-vd-6h4kYtUr8Q6_Yv2UiI4ZgNV9YT4oPX&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=VRVTY5jM-_yDJTLcVNL04g&_nc_ss=7a30f&oh=00_AfwhwujyyiikK_lEGjePwmAlt9gnvF--f_vFMNVSeZAn6Q&oe=69C2BEEB"
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
