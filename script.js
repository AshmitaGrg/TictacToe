let btnEl = document.querySelectorAll(".tic");
let message = document.querySelector(".message");
let msg = document.querySelector(".msg");
let rstBtn = document.querySelector("#rstBtn");

let turn = true;
let count = 0;

let winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,7,8]
];

btnEl.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turn){
            box.innerText = "O"
            box.style.color = "#8C271E"
            turn = false;
        }else{
            box.innerText = "X"
            box.style.color = "#000000"
            turn = true;
        }
        {once : true}
        box.disabled = true;
        count ++;

        let winner = checkWinner();

        if(count === 9 & !winner){
            drawWinner();
        }
    });
});

const disBox = () =>{
    for(let boxes of btnEl){
        boxes.disabled = true;
    }
};

const showWinner = (winner) => {
        msg.innerText = `Winner is ${winner}`;
        message.classList.remove("show");
        disBox();
};

const drawWinner = () => {
    msg.innerText = "Match is draw";
    message.classList.remove("show");
    disBox();
}

const checkWinner = () => {
    for (array of winners){
        let posVal1 = btnEl[array[0]].innerText;
        let posVal2 = btnEl[array[1]].innerText;
        let posVal3 = btnEl[array[2]].innerText;
        
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
            }
        }
    }
};

const rstGame = () =>{
    turn = true;
    count = 0;
    enbBox();
    message.classList.add("show");
};

const enbBox = () =>{
    for(let boxes of btnEl){
        boxes.disabled = false;
        boxes.innerText = "";
    }
};

rstBtn.addEventListener("click",rstGame);
