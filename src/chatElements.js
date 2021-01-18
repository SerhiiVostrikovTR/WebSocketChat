import {getUserNameFromLocalStorage} from "./chatFeatures.js";

const chatName = 'WebSocket chat';
const messagesBoxId = 'messages';
const messageInputId = 'messageInput';
const sendButtonText = 'Send Message'
const sendButtonId = 'sendButton';
const userNameInputId = 'username';

let chatDisplayBox;
let messageBoxInput;
let sendBtn;
let userNameInput;

function createChatHeader(){
    const chatNameHeader = document.createElement('h1');
    const chatNameText = document.createTextNode(chatName);
    chatNameHeader.classList.add('chatHeader');
    chatNameHeader.appendChild(chatNameText);
    return chatNameHeader;
}

function chatInputAndSendButton(){
    const divChatInputSend = document.createElement('div');
    divChatInputSend.appendChild(createChatInput());
    divChatInputSend.appendChild(createChatButtonSend());
    return divChatInputSend;
}

function createChatBox(){
    chatDisplayBox = document.createElement('pre');
    chatDisplayBox.id = messagesBoxId;
    chatDisplayBox.classList.add('messageBox');
    return chatDisplayBox;
}

function createChatInput(){
    messageBoxInput = document.createElement('input');
    messageBoxInput.placeholder = 'Type your message here';
    messageBoxInput.id = messageInputId;
    messageBoxInput.classList.add('messageInput');
    return messageBoxInput;
}

function createUserNameInput(){
    userNameInput = document.createElement('input');
    let userNameFromLocalStorage = getUserNameFromLocalStorage();
    userNameInput.placeholder = 'Type your name here';
    userNameInput.id = userNameInputId;
    if (userNameFromLocalStorage){
        userNameInput.value = userNameFromLocalStorage;
    }
    return userNameInput;
}

function createChatButtonSend(){
    sendBtn = document.createElement('button');
    const buttonText = document.createTextNode(sendButtonText);
    sendBtn.id = sendButtonId;
    sendBtn.classList.add('buttonSend');
    sendBtn.appendChild(buttonText);
    return sendBtn;
}

function createChatElements(){
    const mainDiv = document.createElement('div');
    mainDiv.appendChild(createChatHeader());
    mainDiv.appendChild(createChatBox());
    mainDiv.appendChild(createUserNameInput());
    mainDiv.appendChild(chatInputAndSendButton());
    document.body.appendChild(mainDiv);
}


export {createChatElements, chatDisplayBox, sendBtn, messageBoxInput, userNameInput};

