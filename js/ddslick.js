function displayNiceDropdownList(){
    //$("#decorationDdlType").ddslick('destroy');
    $("#decorationDdlType").ddslick({
        data: ddElementType,
        selectText: "Select element type"
    });

    //$("#decorationDdl").ddslick('destroy');
    $("#decorationDdl").ddslick({
        height: 300,
        data: ddElement,
        selectText: "Select an icon"
    });

    
    $("#editDecorationDdlType").ddslick({
        data: ddElementType,
        selectText: "Select element type"
    });
    $("#editDecorationDdl").ddslick({
        height: 300,
        data: ddElement,
        selectText: "Select an icon"
    });
};