const btn = document.querySelector(".btn");
const main = document.querySelector(".QuizSection");
main.style.transition = '0.2s ease-in';
const imgsContainer = document.querySelector(".image-contrinaer");
const message = pageEles(main, 'h1', 'Getting start with python Quiz ', 'message');
const headmessge = pageEles(main, 'h2', 'Python is a widely used general-purpose, high level programming language. It was created by Guido van Rossum in 1991 and further developed by the Python Software Foundation. It was designed with an emphasis on code readability, and its syntax allows ', 'message');
message.style.textAlign = "center";
headmessge.style.textAlign = "center";
headmessge.style.color = 'green';
const url = 'quiz.json';
const output = pageEles(main, 'div', '', 'game');
const game = { score: 0 };


function imageCreate(herfimge) {
    var image = document.createElement("IMG");
    image.setAttribute("src", herfimge);
    image.setAttribute("width", "230");
    image.style.transition = '0.2s ease-in';
    main.appendChild(image);

}




btn.onclick = LoadData;


function pageEles(parent, t, html, c) {
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    ele.style.border = 'none';
    parent.style.transition = '0.2s ease-in';
    return parent.appendChild(ele);
}






function LoadData() {
    btn.style.display = 'none';
    headmessge.style.display = 'none';
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
    tbtn.style.textAlign = "center";
    tbtn.onclick = () => {
        el.remove();
        createQuestion(data);
    }
    if (data.q.length == 0) {
        message.innerHTML = '<h1> Game Over</h1><div>you scored ' + game.score + ' correct out of ' + data.total;
        if (game.score > 3) {
            message.style.color = 'green';
            imageCreate("/Quiz/images/win.png");

        }
        else {
            message.style.color = 'red';
            imageCreate("/Quiz/images/fail.png")
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
                const bgc = (question.answer == el.textContent) ? '#00C14E' : '#F25F25';
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


