let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test1.jpg') {
        myImage.setAttribute('src','images/test2.jpg');
    }else {
        myImage.setAttribute('src', 'images/test1.jpg')
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好呀，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null) {
        myName = 'User';
    }
    //调用 localStorage API ，它可以将数据存储在浏览器中供后续获取
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hi, ' + myName;
}

