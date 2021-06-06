import React, { useEffect, useState } from "react";

const ProfileSigninIcon = (props) => {
  const { userName } = props;

  return <div>{userName}</div>;
};

export default ProfileSigninIcon;

ProfileSigninIcon.defaultProps = {
  userName: "J",
};
