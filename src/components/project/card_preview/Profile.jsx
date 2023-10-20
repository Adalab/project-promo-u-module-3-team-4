import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/layout/Profile.scss';

function Profile({ avatar }) {
  return (
    <div
      className="profile__avatar"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
