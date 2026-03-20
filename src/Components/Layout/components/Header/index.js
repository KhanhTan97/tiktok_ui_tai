import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import Button from '@/Components/Layout/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '@/Components/Popper';
import images from '@/assets/image';
import AccountItem from '../AccountItems';
import Menu from '@/Components/Popper/Menu';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  });

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };
  const currentUser = true;
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok logo" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* 
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <button>
                <FontAwesomeIcon className = {c} icon={faCloudUpload} />
              </button>
              <button>
                <FontAwesomeIcon className = {c} icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src="https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/630498696_122172251066749816_2829816107203028667_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHCgqACzmkqnjaDIkwjJSw-idrN0EgEE1-J2s3QSAQTX3VpfHjqVX1gSglBZJ7yaVxDUQTV5NH4yqw2R1-6bkxD&_nc_ohc=_-BKg2exJIcQ7kNvwE0FLpH&_nc_oc=AdnAG374UR5ZxBjZd0Cn3jy3Nfq75XQ4kgvnTOAPVYQ_3yuWxHA4bUdU47NdKNPARus&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=h5B1upqqgtVHWjDIq8PWCg&_nc_ss=8&oh=00_AfyuzFQSbO7mhfy7LFvyrd1sNIRjj2Tr5EVsgJLCDCrzlw&oe=69B963AD"
                className={cx('user-avatar')}
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
