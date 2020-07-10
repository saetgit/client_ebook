import Vue from 'vue';
import moment from "moment-jalaali";
import moment_timezone from 'moment-timezone';

export default function convertTimeZoneSpecial(date, timezone) {

    let finalDate = moment(date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-M-D HH:mm:ss');
    // Get date with string type  
    let final = moment_timezone.utc(finalDate).tz(timezone).format();

    let lang = Vue.prototype.$nuxt.$options.i18n.locale;
    if (lang === "fa")
        return enNumToFa(moment(final, 'YYYY-M-D HH:mm:ss').format('dddd')) + '\xa0\xa0' +
            enNumToFa(moment(final, "YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD"));
    else
        return enNumToFa(moment(final, 'YYYY-M-D HH:mm:ss').format('dddd')) + '\xa0\xa0' +
            enNumToFa(moment(final, "YYYY-MM-DD HH:mm:ss").format("YYYY/MM/DD"));

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