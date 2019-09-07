

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}