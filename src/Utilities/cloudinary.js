const wrapper = document.querySelector('.image-wrapper');
// const picUrl = 'http://ksurobotics.esy.es/wp-content/uploads/2018/06/Dylan-Staatz.jpeg';
const sourceUrl = 'http://ksurobotics.esy.es/wp-content/uploads/2018/04/UmiBirthday-225x300.jpg';
// function uploadToCloudinary({ url }) {

// !Make sure to have a fuzzy image filler
// const heroImageParams = `${defaultParams},`; // Need responsive images (multiple different heights and widths.) //! When cropping set fill mode.

const postPreview1x = 'w_175,h_175,r_88,c_fill';

const postPreview2x = 'w_250,h_250,r_175,c_fill';

function getTransformationUrl({ transformations, remoteUrl }) {
  const parsedRemoteUrl = remoteUrl.split('wp-content/uploads/').pop();
  const optimParams = 'f_auto,q_auto';
  return `https://res.cloudinary.com/ksu-rob/image/upload/${transformations},${optimParams}/remote-media/${parsedRemoteUrl}`;
}

function getFixedTag() {
  const baseUrl = getTransformationUrl({
    transformations: postPreview1x,
    remoteUrl: sourceUrl,
  });
  const baseUrl2x = getTransformationUrl({
    transformations: postPreview2x,
    remoteUrl: sourceUrl,
  });
  return `<img src=${baseUrl} alt="image" srcset="${baseUrl}, ${baseUrl2x} 2x"></img>`;
}

const competitionsHero = { maxWidth: 1400, maxHeight: 550, minWidth: 320 };

function getFlexTag(responsiveObject) {
  const breakPoints = [];
  // want breakPoints to be predictable the correct width
  for (let i = 1; i <= 4; i += 1) {
    breakPoints.push((responsiveObject.maxWidth + responsiveObject.minWidth) / i);
  }
  const baseUrl = getTransformationUrl({
    transformations: postPreview1x,
    remoteUrl: sourceUrl,
  });
  const baseUrl2x = getTransformationUrl({
    transformations: postPreview2x,
    remoteUrl: sourceUrl,
  });

  return `<img src=${baseUrl} alt="image" sizes="(max-width: 1400px) 100vw, 1400px" srcset="
${baseUrl} 320w,
${baseUrl} 810w,
${baseUrl} 1149w,
${baseUrl} 1400w"></img>`;
}

wrapper.innerHTML = getFixedTag();

// export { insertImage };
