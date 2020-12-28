const counter = document.getElementById('counter');
const increment = document.getElementById('plus');
const decrement = document.getElementById('minus');
const like = document.getElementById('heart');
const likesList = document.getElementsByClassName('likes')[0];
const commentBtn = document.getElementById('submit');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');
const pauseBtn = document.getElementById('pause')
let likesArray = [];
let timer = null;

const startCounting = () => {
    counter.innerText ++;
};

document.addEventListener('DOMContentLoaded', () => {
    timer = setInterval(startCounting, 1000);
    increment.addEventListener('click', () => counter.innerText ++);
    decrement.addEventListener('click', () => counter.innerText --);
    like.addEventListener('click', () => {
        likesArray.push(parseInt(counter.innerText))
        const li = document.createElement('li');
        li.setAttribute('id', parseInt(counter.innerText))
        let numCount = 0;
        for(let i = 0; i < likesArray.length; i++) {
            if (likesArray[i] === parseInt(counter.innerText)) {
                numCount += 1;
            }
        }
        if (document.getElementById(parseInt(counter.innerText)) !== null) {
           document.getElementById(parseInt(counter.innerText)).innerText = `${counter.innerText} has been liked ${numCount} times`;
        }
        else {
            li.innerText = `${counter.innerText} has been liked ${numCount} times`;
            likesList.appendChild(li);
        }

    });
    commentBtn.addEventListener('click', (e) => {
        const linebreak = document.createElement("br");
        let comment = document.createTextNode(commentInput.value);
        if (comment.textContent !== "") {
            commentsList.appendChild(comment)
            commentsList.appendChild(linebreak)
            commentInput.value = ""
        }
        e.preventDefault()
    })
    pauseBtn.addEventListener('click', () => {
        if(pauseBtn.innerText === 'pause') {
            clearInterval(timer);
            timer = null;
            commentBtn.disabled = true;
            increment.disabled = true;
            decrement.disabled = true;
            like.disabled = true;
            pauseBtn.innerText = 'resume';
        }
        else if (pauseBtn.innerText === 'resume') {
            commentBtn.disabled = false;
            increment.disabled = false;
            decrement.disabled = false;
            like.disabled = false;
            pauseBtn.innerText = 'pause';
            timer = setInterval(startCounting, 1000);
        }
    })

});