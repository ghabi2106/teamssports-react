import { BaseService } from './base.service';


export default class TicketService extends BaseService {

    constructor() {
        super("account");
    }

    login(data) {
        return this.axios.post(`${this.serviceUrl}/login`, data);
    }

    ResetPassword(data) {
        return this.axios.post(
            `${this.serviceUrl}/ResetPassword`, data, this.requestOptions
        );
    }

    ConfirmEmail(data) {
        return this.axios.post(
            `${this.serviceUrl}/ConfirmEmail`, data, this.requestOptions
        );
    }

    createUserSession(user) {
        // remove user from local storage to log user out
        localStorage.setItem("user", JSON.stringify(user));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        localStorage.removeItem('permissions');
        window.location = `/login`;
    }

    setUserLanguage(language) {
        // remove user from local storage to log user out
        localStorage.setItem("language", language);
    }

    register(data) {
        return this.axios.post(`${this.serviceUrl}/register`, data);
    }

    getCountry() {
        return this.axios.get(`${this.serviceUrl}/getcountry`);
    }

    static isAuthentificated() {
        // remove user from local storage to log user out
        return localStorage.getItem('user');
    }
    static usertype() {
        var type = 0;
        var user =JSON.parse(localStorage.getItem('user'));

        if (user) {
            type = user.userType
        }
        return type;


    }
    static currentLanguage() {
        // remove user from local storage to log user out
        return localStorage.getItem('language');
    }

}