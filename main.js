const boys = [
  {
    name: 'Đạt Huy',
    img: 'dathuy.jpeg'
  },
  {
    name: 'Phước Tắc',
    img: 'phuoctai.jpeg'
  },

]
boys.sort(() => 0.5 - Math.random())

const boyNameSpan = document.querySelector('.boy-name')
const boyImage = document.querySelector('.boy-image')
let index = 0;

const popTheBoy = () => {
  console.log("work!")
  boyNameSpan.innerHTML = boys[index].name;
  boyImage.src = `./assets/${boys[index].img}`

  index < boys.length - 1 ? index++ : null;
}
