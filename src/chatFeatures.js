import {sendMessage, ws} from "./wsFeatures";
import {chatDisplayBox, messageBoxInput, userNameInput} from "./chatElements.js";

function userNameHandler(){
    if(userNameInput.value){
        setUserNameToLocalStorage(userNameInput);
    }
    else {
        userNameInput.value = getUserNameFromLocalStorage();
    }
}

function sendBtnClkHandler(){
    if (!ws) {
        showMessage("No WebSocket connection :(");
        return ;
    }
    if(userNameInput.value && messageBoxInput.value){
        sendMessage(messageBoxInput.value);
        return ;
    }
    alert(`Can't send message! Username/message is empty!`);
}

function makeFormatMessage(msg){
    return JSON.stringify({'from': getUserNameFromLocalStorage(), 'message': msg});
}

function getUserNameFromLocalStorage(){
    return window.localStorage.getItem('user');
}

function setUserNameToLocalStorage(username){
    window.localStorage.setItem('user', username.value);
}

function showMessage(msg) {
    chatDisplayBox.textContent += `\n\n[${timeConverter(msg.time)}] ${msg.from}: ${msg.message}`;
    chatDisplayBox.scrollTop = chatDisplayBox.scrollHeight;
    messageBoxInput.value = '';
}

function timeConverter(time){
    return new Date(time).toUTCString();
}

function incomingMessagesSorter(messageList){
    messageList.sort(function(a, b) {
        return a.time - b.time;
    });
}

export {sendBtnClkHandler, userNameHandler, makeFormatMessage, getUserNameFromLocalStorage, setUserNameToLocalStorage,
    showMessage, timeConverter, incomingMessagesSorter};