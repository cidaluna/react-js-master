const Avatar = (props) => {
  const {imageU, altT} = props;

  return (
    <div>
      <img src={imageU}
          alt={altT} 
          className="avatar"
          width={100}
          height={100}
      />
    </div>
  );
};

const Profile = (props) => {
  const {avatarUrl, avatarAltText, avatarUser} = props;

  return(
    <div className="profile">
      <Avatar imageU={avatarUrl} altT={avatarAltText} />
      <p>Username: {avatarUser}</p>
    </div>
  )
}

export default Profile;