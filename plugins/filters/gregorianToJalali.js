import Vue from 'vue';
import moment from "moment-jalaali";

export default function gregorianToJalali(date) {
    let lang = Vue.prototype.$nuxt.$options.i18n.locale;
    if (lang === "fa")
        return enNumToFa(moment(date, "YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD"));
    else
        return enNumToFa(moment(date, "YYYY-MM-DD HH:mm:ss").format("YYYY/MM/DD"));
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