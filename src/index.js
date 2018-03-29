import { tween } from 'popmotion'
import './index.css'

const counter = document.querySelector('#count')
const updateCounter = (v) => counter.innerHTML = (v - 0).toFixed(2)

const counterButton = document.querySelector('#counter')

counterButton.addEventListener('click', () => {
    tween({
        to: 1000,
        duration: 1000
    }).start(updateCounter)
})


