import maleta from "../images/icon-work.svg"
import play from "../images/icon-play.svg"
import read from "../images/icon-study.svg"
import exercise from "../images/icon-exercise.svg"
import talk from "../images/icon-social.svg"
import heart from "../images/icon-self-care.svg"
const cardlist = []
const newCard1 = {
    id: "1",
    hobby: "Work",
    hour: "32hrs",
    last: "36hrs",
    theme: "back-work",
    img: maleta
}
cardlist.push(newCard1)
const newCard2 = {
    id: "2",
    hobby: "Play",
    hour: "10hrs",
    last: "8hrs",
    theme: "back-play",
    img: play
}
cardlist.push(newCard2)
const newCard3 = {
    id: "3",
    hobby: "Study",
    hour: "4hrs",
    last: "7hrs",
    theme: "back-study",
    img: read
}
cardlist.push(newCard3)
const newCard4 = {
    id: "4",
    hobby: "Exercise",
    hour: "4hrs",
    last: "5hrs",
    theme: "back-exercise",
    img: exercise
}
cardlist.push(newCard4)
const newCard5 = {
    id: "5",
    hobby: "Social",
    hour: "5hrs",
    last: "10hrs",
    theme: "back-social",
    img: talk
}
cardlist.push(newCard5)
const newCard6 = {
    id: "6",
    hobby: "Self Care",
    hour: "32hrs",
    last: "2hrs",
    theme: "back-self",
    img: heart
}
cardlist.push(newCard6)


export { cardlist }