import Vue from 'vue';
import moment from "moment-jalaali";

export default function getTimeOnly(date) {
    return enNumToFa(moment(date, 'YYYY-M-D HH:mm:ss').format('HH:mm:ss'));

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