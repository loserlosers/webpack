import { tab } from './tab'
import { marquee } from './marquee'

tab()
marquee()
import './style/index.css'
import './style/index.less'

import gifsrc from './assets/1.gif'
import pngsrc from './assets/logo_small.png'
// import ctsrc from './assets/ct.webp'
import './assets/fonts/iconfont.css'
const gif = document.createElement('img')
const png = document.createElement('img')
// const ct = document.createElement('img')

gif.src =gifsrc
png.src=pngsrc
// ct.src=ctsrc

document.body.appendChild(gif)
document.body.appendChild(png)
// document.body.appendChild(ct)

const abb = ()=> console.log(123);

console.log(abb);
