let today = new Date();
function date() {
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date;
}
module.exports = date;