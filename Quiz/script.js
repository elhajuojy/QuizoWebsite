const btn = document.querySelector(".btn");
const main = document.querySelector(".QuizSection");
const message = pageEles(main, 'h1', 'Start The Quiz', 'message');
const url = 'quiz.json';
const output = pageEles(main, 'div', '', 'game');
const game = { score: 0 };


btn.onclick = LoadData;


function pageEles(parent, t, html, c) {
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}

function LoadData() {
    btn.style.display = 'none';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const temp = {
                total: data.length,
                q: data,
                score: 0,
                counter: 0
            };
            createQuestion(temp);
        })
}

function createQuestion(data) {
    const el = pageEles(output, 'div', '', 'question');
    const tbtn = pageEles(el, 'button', 'Next', 'next');
    tbtn.onclick = () => {
        el.remove();
        createQuestion(data);
    }
    if (data.q.length == 0) {
        message.innerHTML = '<h1> Game Over</h1><div>you scored ' + game.score + ' correct out of ' + data.total;
        if (game.score > 3) {
            message.style.color = 'green';
        }
        else {
            message.style.color = 'red';
        }
        tbtn.style.display = 'none';
        //tbtn.textContent = 'restart the game';


    } else {
        const question = data.q.shift();
        data.counter++;
        message.textContent = 'Question ' + data.counter + ' of ' + data.total;
        if (data.q.length == 0) tbtn.textContent = 'End Game';
        tbtn.style.display = 'none';
        outputQuestion(question, el, tbtn);
    }

}

function outputQuestion(question, parent, tbtn) {
    console.log(question);
    const que = pageEles(parent, 'h1', question.question + '?', 'question');
    const arr = question.opt;
    arr.push(question.answer);
    arr.sort(() => {
        return Math.random() - 0.5;
    })
    const btns = pageEles(parent, 'div', '', 'opts');
    arr.forEach(e => {
        const optemp = pageEles(btns, 'button', e, 'btns');
        optemp.onclick = () => {
            if (question.answer == e) {
                message.textContent = 'Correct';
                game.score++;
            }
            else {
                message.textContent = 'Incorrect';
            }
            const temps = parent.querySelectorAll('.btns');
            temps.forEach(el => {
                el.disbled = true;
                const bgc = (question.answer == el.textContent) ? 'green' : 'red';
                el.style.backgroundColor = bgc;
            })
            tbtn.style.display = 'block';
            parent.appendChild(tbtn);
        }
    });



}



function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}


