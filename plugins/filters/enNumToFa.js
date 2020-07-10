import Vue from 'vue';

export default function enNumToFa(number) {
    const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    let lang = Vue.prototype.$nuxt.$options.i18n.locale;
    if (lang === "fa")
        return String(number).replace(/[0-9]/g, function (w) {
            return id[+w];
        });
    else
        return number;
}
