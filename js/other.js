function tryParseInt(str, defaultValue) {
    if(str !== null && str != undefined && !isNaN(str)) {
        return parseInt(str);
    }
    
    return defaultValue;
}