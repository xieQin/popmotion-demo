import {
    tween,
    styler,
    easing,
    action
} from 'popmotion'
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

const ball = document.querySelector('#ball')
const baller = document.querySelector('#baller')
const ballStyler = styler(ball)

baller.addEventListener('click', () => {
    tween({
        from: {
            x: 0,
            scale: 1
        },
        to: {
            x: 150,
            scale: 2
        },
        ease: easing.easeInOut,
        flip: Infinity,
        duration: 2000
    }).start(ballStyler.set)
})

const just = (v) => action(({ update, complete }) => {
    update(v)
    complete()
})

just(1).start({
    update: console.log,
    complete: () => console.log('completed!')
})

