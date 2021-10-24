import React, { useRef, useState, useEffect } from 'react';
import { getProfileImageUrl, uploadProfileImage } from './firebase/user';

export const ProfileImage = ({ id }) => {
  const placeholder = '/profile-placeholder.png';
  const fileInput = useRef(null);
  const [ imageUrl, setImageUrl ] = useState(placeholder);
  const [ uploadProgress, setUploadProgress ] = useState(0);

  useEffect(() => {
    getProfileImageUrl(id)
      .then((url) => setImageUrl(url));
  }, [id])

  const progressIndication = (progress) => {
    setUploadProgress(progress);
  }

  const fileChange = (files) => {
    const file = files[0];
    uploadProfileImage(id, file, progressIndication)
      .then((url) => setImageUrl(url))
      .catch(() => setImageUrl(placeholder));
  }

  return (
    <div className="ui form four wide column profile-image">
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
      <progress style={{ width: "100%" }} value={uploadProgress} maxValue="100" />
      <button
        className="ui grey button upload-button"
        onClick={() => fileInput.current.click()}
      >
        Upload photo
      </button>
    </div>
  )
}
