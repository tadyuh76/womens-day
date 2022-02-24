const music = new Audio('./assets/ngaydautien.mp3')
music.play()

const boys = [
  {
    name: "Ngọc Bảo",
    image: "ngocbao.jpeg"
},
  {
    name: "Tiến Cư",
    image: "tiencu.jpeg"
},
  {
    name: "Việt Cường",
    image: "vietcuong.jpeg"
},
  {
    name: "Quốc Đại",
    image: "quocdai.jpeg"
},
  {
    name: "Công Danh",
    image: "congdanh.jpeg"
},
  {
    name: "Nhật Đông",
    image: "nhatdong.jpeg"
},
  {
    name: "Văn Đức",
    image: "vanduc.jpeg"
},
  {
    name: "Xuân Duy",
    image: "xuanduy.jpeg"
},
  {
    name: "Đạt Huy",
    image: "dathuy.jpeg"
},
  {
    name: "Huy Hoàng",
    image: "huyhoang.jpeg"
},
  {
    name: "Minh Khang",
    image: "minhkhang.jpeg"
},
  {
    name: "Trác Khang",
    image: "trackhang.jpeg"
},
  {
    name: "Anh Kiệt",
    image: "anhkiet.jpeg"
},
  {
    name: "Quang Minh",
    image: "quangminh.jpeg"
},
  {
    name: "Bá Lân",
    image: "balan.jpeg"
},
  {
    name: "Mậu Cường",
    image: "maucuong.jpeg"
},
  {
    name: "Trọng Nhân",
    image: "trongnhan.jpeg"
},
  {
    name: "Phước Tài",
    image: "phuoctai.jpeg"
},
  {
    name: "Minh Trường",
    image: "minhtruong.jpeg"
}, {
    name: "Minh Trường",
    image: "minhtruong.jpeg"
},
  {
    name: "Thầy Thịnh fake",
    image: "huuthinh.jpeg"
},
  {
    name: "Thầy Thịnh real",
    image: "thaythinh.jpeg"
  }, {
    name: "Thầy Thịnh real",
    image: "thaythinh.jpeg"
  },
]
boys.sort(() => 0.5 - Math.random())

const boyNameSpan = document.querySelector('.boy-name')
const boyImage = document.querySelector('.boy-image')
let index = 0;

const popTheBoy = () => {
  if (index >= 23) {
    boyNameSpan.innerHTML = "Hết rồiii. Nhớ like, share và subscribe cho tụi con trai mình nha :D"
    boyImage.src = `./assets/end.jpg`
    return
  }

  boyNameSpan.innerHTML = boys[index].name;
  boyImage.src = `./assets/${boys[index].image}`
  index++
}
