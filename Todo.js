'use strict';

let itemList = [];
let num = 1;
let list = document.getElementById("list");

function enterkey() {
	if (window.event.keyCode == 13) {
        let item = document.getElementById(`item${num}`);
        if (item.value) {
        num++;

        let newListItem = document.createElement("li");
        newListItem.setAttribute("class","list-item");
        list.appendChild(newListItem);

        let check = document.createElement("p");
        check.setAttribute("id", `check${num}`);
        check.setAttribute("class", "check N");
        check.setAttribute("onClick", "checked(this.id)");
        check.innerHTML="✔️";
        newListItem.appendChild(check);

        let newInput = document.createElement("input");
        newInput.setAttribute("id", `item${num}`);
        newInput.setAttribute("class", "item");
        newInput.setAttribute("onkeyup", "enterkey()");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("placeholder", " 새로운 할 일");
        newInput.setAttribute("name", "todo");
        newInput.setAttribute("autofocus", "true");
        newListItem.appendChild(newInput);

        newInput.focus();
        }
    }
}

function addItem() {
    // console.log("새 칸이 생겼습니다");
    let item = document.getElementById(`item${num}`);
    num++;

    let newListItem = document.createElement("li");
    newListItem.setAttribute("class","list-item");
    list.appendChild(newListItem);

    let check = document.createElement("p");
    check.setAttribute("id", `check${num}`);
    check.setAttribute("class", "check N");
    check.setAttribute("onClick", "checked(this.id)");
    check.innerHTML="✔️";
    newListItem.appendChild(check);

    let newInput = document.createElement("input");
    newInput.setAttribute("id", `item${num}`);
    newInput.setAttribute("class", "item");
    newInput.setAttribute("onkeyup", "enterkey()");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", " 새로운 할 일");
    newInput.setAttribute("name", "todo");
    newInput.setAttribute("autofocus", "true");
    newListItem.appendChild(newInput);

    newInput.focus();
}

function checked(e) {
    // console.log("클릭되었습니다.");
    let check = document.getElementById(e);
    let input = check.nextElementSibling;
    if(check.className === "check N") {
        document.getElementById(input.id).style.textDecoration = 'line-through';
        check.className = "check Y";
        document.getElementById(input.id).style.background = "#d4d4d4";
        check.style.background = "rgb(145, 145, 145)";
    } else if(check.className === "check Y") {
        document.getElementById(input.id).style.textDecoration = 'none';
        check.className = "check N";
        document.getElementById(input.id).style.background = "#EBEBEB";
        check.style.background = "darkgrey";
    }
}

    // 남은 할 일
    // 1. input 박스 가로 길이 설정 [완]
    // 2. 체크 버튼 hover 설정 [완]
    // 3. 투두 전체 세로스크롤 설정 [완]
    // 4. input 박스 가로스크롤 설정 [완]
    // 5. 체크 눌렀을때 input 박스 어둡게 [완]
    // 6. input 입력창 활성화 될때 테두리 안뜨게 [완]