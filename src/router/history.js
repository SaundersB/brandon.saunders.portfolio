import {createHashHistory} from 'history';
const hashHistory = createHashHistory({
    hashType: "slash",
    getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

export default hashHistory;
