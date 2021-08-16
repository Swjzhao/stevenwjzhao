const preCheckImage = (file: File) => {
  if (!file) throw new Error('File does not exist.');
  if (file.type !== 'image/png' && file.type !== 'image/jpeg')
    throw new Error('Image must be jpg or png');
  if (file.size > 2 * 1024 * 1024) throw new Error('Image excceds 2 mb');
};

export default preCheckImage;
