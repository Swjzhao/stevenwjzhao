const imageUpload = async (file: File, type: 'avatar' | 'blog') => {
  const formData = new FormData();
  formData.append('file', file);
  if (type === 'avatar') {
    formData.append('upload_preset', 'profile-ezgpcrvh');
  } else {
    formData.append('upload_preset', 'post-tilaamys');
  }
  formData.append('cloud_name', 'we-are-still-dreamers');

  const res = await fetch('https://api.cloudinary.com/v1_1/we-are-still-dreamers/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  return { public_id: data.public_id, url: data.secure_url };
};

export default imageUpload;
