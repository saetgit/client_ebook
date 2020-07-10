import gregorianToJalaliFull from './gregorianToJalaliFull';
import gregorianToJalaliHuman from './gregorianToJalaliHuman';
import gregorianToJalali from './gregorianToJalali';
import getTimeOnly from './getTimeOnly';
import enNumToFa from './enNumToFa';
import formatNumber from './formatNumber';
import strippedText from './strippedText';
import convertTimeZone from './convertTimeZone';
import convertTimeZoneSpecial from './convertTimeZoneSpecial';

export default {
    install(Vue) {
        Vue.filter('gregorianToJalaliFull', gregorianToJalaliFull);
        Vue.filter('gregorianToJalaliHuman', gregorianToJalaliHuman);
        Vue.filter('gregorianToJalali', gregorianToJalali);
        Vue.filter('getTimeOnly', getTimeOnly);
        Vue.filter('enNumToFa', enNumToFa);
        Vue.filter('formatNumber', formatNumber);
        Vue.filter('strippedText', strippedText);
        Vue.filter('convertTimeZone', convertTimeZone);
        Vue.filter('convertTimeZoneSpecial', convertTimeZoneSpecial);
    }
}
