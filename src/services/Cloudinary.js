const wrapper = document.querySelector('.image-wrapper');
// const picUrl = 'http://ksurobotics.esy.es/wp-content/uploads/2018/06/Dylan-Staatz.jpeg';
const picUrl = 'http://ksurobotics.esy.es/wp-content/uploads/2018/04/UmiBirthday-225x300.jpg';
// function uploadToCloudinary({ url }) {
const partialUrl = picUrl.split('wp-content/uploads/').pop();

wrapper.innerHTML = `<img src=https://res.cloudinary.com/ksu-rob/image/upload/w_150,h_150,f_auto/remote-media/${partialUrl} alt="image"></img>`;
