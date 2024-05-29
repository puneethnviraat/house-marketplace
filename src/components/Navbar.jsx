import React from 'react';
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathmatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate('/')}>
            <ExploreIcon
              fill={pathmatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathmatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/Offers')}>
            <OfferIcon
              fill={pathmatchRoute('/Offers') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathmatchRoute('/Offers')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/Profile')}>
            <PersonOutlineIcon
              fill={pathmatchRoute('/Profile') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathmatchRoute('/Profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
