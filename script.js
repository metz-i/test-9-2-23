// writing a isValid Password function
// 2 arguments - password and username
// password must:
// -be at least 8 characters
// -cannot contain spaces
// -cannot contain the username
// if all reqs met, return true
// otherwise: false

function isValid(username, password) {
    if (password.length >= 8 && !password.indexOf(' ') == -1 && !password.indexOf(username) == -1) {
        return true
    }
    return false
} 
