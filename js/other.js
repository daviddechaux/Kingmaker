function TryParseInt(str, defaultValue) {
    if(str !== null && str != undefined && str.length > 0 && !isNaN(str)) {
        return parseInt(str);
    }
    
    return defaultValue;
}