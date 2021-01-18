function notificationHandler(){
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
}


function notifyMe() {
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        let notification = new Notification('WebSocket Chat', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: 'Hey there! You\'ve new message here!',
        });
        notification.onclick = function() {
            window.open('http://localhost:3000');
        };
    }
}

export {notificationHandler, notifyMe};