const cells = document.querySelectorAll(".cell");

let mark = "O";

const winSetList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const checkResult = (cur) => {
    for (let winSet of winSetList) {
        if (cells[winSet[0]].innerHTML === cur && cells[winSet[1]].innerHTML === cur && cells[winSet[2]].innerHTML === cur) {
            alert(`${cur} WINS!`)
            for (cell of cells) {
                cell.innerHTML = "";
            }
        }
    }
}

for (let cell of cells) {
    cell.addEventListener('click', (event) => {
        if (!cell.innerHTML) {
            cell.innerHTML = mark;
            checkResult(mark);
            if (mark === "O") mark = "X";
            else mark = "O";
        }
    })
}