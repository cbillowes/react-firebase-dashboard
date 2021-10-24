import React, { useRef, useState, useEffect } from 'react';
import { getProfileImageUrl, uploadProfileImage } from './firebase/user';

export const ProfileImage = ({ id }) => {
  const placeholder = '/profile-placeholder.png';
  const fileInput = useRef(null);
  const [ imageUrl, setImageUrl ] = useState(placeholder);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    getProfileImageUrl(id)
      .then((url) => setImageUrl(url));
  }, [id])

  const loading = (progress) => {
    setLoading(progress < 100);
  }

  const fileChange = (files) => {
    const file = files[0];
    uploadProfileImage(id, file, loading)
      .then((url) => setImageUrl(url))
      .catch(() => setImageUrl(placeholder));
  }

  const divClassName = `ui form four wide column profile-image ${isLoading ? 'loading' : ''}`

  return (
    <div className={divClassName}>
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
