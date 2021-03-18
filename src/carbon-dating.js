const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    var SAMPLE_ACTIVITY = Number(sampleActivity);
    if (typeof sampleActivity == "string" && SAMPLE_ACTIVITY > 0 && SAMPLE_ACTIVITY < MODERN_ACTIVITY) {
        equation1 = 0.693 / HALF_LIFE_PERIOD
        equation2 = Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / equation1;
        return Math.floor(equation2)+1;
    } else return false;
};
