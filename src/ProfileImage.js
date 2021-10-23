import React, { useRef, useState, useEffect } from 'react';
import { getProfileImageUrl, uploadProfileImage } from './firebase/user';

export const ProfileImage = ({ id }) => {
  const placeholder = '/profile-placeholder.png';
  const fileInput = useRef(null);
  const [ imageUrl, setImageUrl ] = useState(placeholder);

  useEffect(() => {
    getProfileImageUrl(id)
      .then((url) => setImageUrl(url));
  }, [id])

  const fileChange = (files) => {
    const file = files[0];
    uploadProfileImage(id, file)
      .then((url) => setImageUrl(url))
      .catch(() => setImageUrl(placeholder));
  }

  return (
    <div className="four wide column profile-image">
      <img
        className="ui image"
        src={imageUrl}
        alt="profile"
      />
      <input
        className="file-input"
        type="file"
        accept=".png,.jpg"
        ref={fileInput}
        onChange={(e) => fileChange(e.target.files)}
      />
      <button
        className="ui grey button upload-button"
        onClick={() => fileInput.current.click()}
      >
        Upload photo
      </button>
    </div>
  )
}
