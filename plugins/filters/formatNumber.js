import Vue from 'vue';
export default function formatNumber(num, decpoint, sep) {
    // check for missing parameters and use defaults if so
    if (arguments.length == 2) {
        sep = ",";
    }
    if (arguments.length == 1) {
        sep = ",";
        decpoint = ".";
    }
    // need a string for operations
    num = num.toString();
    // separate the whole number and the fraction if possible
    let a = num.split(decpoint);
    let x = a[0]; // decimal
    let y = a[1]; // fraction
    let z = "";

    if (typeof x != "undefined") {
        // reverse the digits. regexp works from left to right.
        for (let i = x.length - 1; i >= 0; i--) z += x.charAt(i);
        // add seperators. but undo the trailing one, if there
        z = z.replace(/(\d{3})/g, "$1" + sep);
        if (z.slice(-sep.length) == sep) z = z.slice(0, -sep.length);
        x = "";
        // reverse again to get back the number
        for (let i = z.length - 1; i >= 0; i--) x += z.charAt(i);
        // add the fraction back in, if it was there
        if (typeof y != "undefined" && y.length > 0) x += decpoint + y;
    }
    return enNumToFa(x);
}

function enNumToFa(number) {
    const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];


    let lang = Vue.prototype.$nuxt.$options.i18n.locale;
    if (lang === "fa")
        return String(number).replace(/[0-9]/g, function (w) {
            return id[+w];
        });
    else
        return number;

}