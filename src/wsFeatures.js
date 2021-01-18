import {incomingMessagesSorter, showMessage, makeFormatMessage} from "./chatFeatures.js";
import {notifyMe} from "./notifications.js";

const ws_url = 'ws://chat.shas.tel'
let ws;

function initWS() {
    if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
    }
    ws = new WebSocket(ws_url);
    ws.onopen = () => {
        console.log('Connection opened!');
    }
    ws.onmessage = ({data}) => {
        console.log('New messages received!');
        if(document.visibilityState !== "visible"){
            notifyMe();
        }
        let messageList = JSON.parse(data);
        incomingMessagesSorter(messageList);
        messageList.forEach(msg => showMessage(msg));
    };
    ws.onclose = function () {
        console.log('Close previous socket');
        ws = null;
        initWS();
    }
}

function sendMessage(msg){
    waitForSocketConnection(ws, function (){
        ws.send(makeFormatMessage(msg));
    });
}

function waitForSocketConnection(socket, callback){
    setTimeout(
        function () {
            if (socket.readyState === 1) {
                console.log("Connection is established")
                if (callback != null){
                    callback();
                }
            } else {
                console.log("wait for connection...");
                waitForSocketConnection(socket, callback);
            }
        }, 1000);
}

export {initWS, showMessage, sendMessage, ws}
