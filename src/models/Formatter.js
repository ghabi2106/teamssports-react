import moment from "moment"

export function dateFormatter(date) {
    var formattedDate
    if (date) {
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        formattedDate = `${dd}/${mm}/${yyyy}`;
    }
    return formattedDate
}

export function timeFormatter(time) {
    var formattedTime;
    if (time) {
        formattedTime = time.substring(0, 5);
    }
    return formattedTime;
}

export function takeDateFormatter(date) {
    var takeDate;
    if (date) {
        takeDate = date.substring(0, 10);
    }
    return takeDate;
}

export function numberFormatter(number) {
    var formattedNumber = 0;
    if (number) {
        var parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        if (parts.length == 2)
            parts[1] = parts[1].substring(0, 2);
        formattedNumber = parts.join(".");
    }
    return formattedNumber;
}

export function getNumber(number) {
    if (number)
        return number;
    return 0;
}

export function selectListFormatter(list, name, value) {
    var selectList = new Array();
    var obj;
    if (list) {
        const names = list.map(p => p[name]);
        const values = list.map(p => p[value]);
        for (var i = 0; i < names.length; i++) {
            obj = { name: names[i], value: values[i] };
            selectList.push(obj);
        }
    }
    return selectList;
}
export function selectListFormatter2(list, name, name2, value) {
    var selectList = new Array();
    var obj;
    if (list) {
        const names = list.map(p => p[name]);
        const names2 = list.map(p => p[name2]);
        const values = list.map(p => p[value]);
        for (var i = 0; i < names.length; i++) {
            obj = { name: names[i] + '-' + names2[i], value: values[i] };
            selectList.push(obj);
        }
    }
    return selectList;
}
export function selectListFormatter4(list, name, name2, name3, name4, value) {
    var selectList = new Array();
    var obj;
    if (list) {
        const names = list.map(p => p[name]);
        const names2 = list.map(p => p[name2]);
        const names3 = list.map(p => p[name3]);
        const names4 = list.map(p => p[name4]);
        const values = list.map(p => p[value]);
        for (var i = 0; i < names.length; i++) {
            obj = { name: names[i] + '-' + names2[i] + '-' + names3[i] + '-' + moment(names4[i]).format('L'), value: values[i] };
            selectList.push(obj);
        }
    }
    return selectList;
}
export function isEmptyOrSpaces(str) {
    if (typeof str === 'undefined') {
        return true
    }
    return str === null || str.match(/^ *$/) !== null;
}

export function passwordTest(password, confirmPassword) {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(password) && (password == confirmPassword);
}

export function passwordValidation(password) {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(password);
}

export function emailValidation(email) {
    var strongRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return strongRegex.test(email);
}

export function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    token: searchParams.get('token') || '',
  };
}