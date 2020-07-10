import Vue from 'vue';
import moment from "moment-jalaali";

export default function gregorianToJalaliHuman(date, full) {
    let lang = Vue.prototype.$nuxt.$options.i18n.locale;
    if (lang === "fa")
        if (full) {
            return enNumToFa(moment(date).format("dddd jDo jMMMM jYYYY"));
        } else {
            return enNumToFa(moment(date).format("dddd jDo jMMMM"));
        }
    else
        if (full) {
            return enNumToFa(moment(date).format("dddd Do MMMM YYYY"));
        } else {
            return enNumToFa(moment(date).format("dddd Do MMMM"));
        }
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