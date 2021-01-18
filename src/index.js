import {createChatElements, sendBtn, userNameInput, messageBoxInput} from "./chatElements.js";
import {initWS} from "./wsFeatures.js";
import {notificationHandler} from "./notifications.js";
import {userNameHandler, sendBtnClkHandler} from "./chatFeatures.js";

createChatElements();

userNameInput.addEventListener('change', userNameHandler);
sendBtn.addEventListener('click', sendBtnClkHandler);
messageBoxInput.addEventListener('keypress', (event) => {
    if(event.which === 13){
        sendBtnClkHandler();
}});
document.addEventListener('DOMContentLoaded', notificationHandler);

(function() {
    initWS();
})();


