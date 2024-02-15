console.log("HIER BIN ICH");

// TODO: kommt ein GET-Parameter "device" im Request mit?
if(window.location.search.length > 0) {
    let getParamString = window.location.search.substr(1);
    let getParamsList = [];

    // TODO: split at char "&"
    if(getParamString.includes("&")) {
        getParamsList.push(getParamString.split("&")[0]);
    } else {
        getParamsList.push(getParamString);
    }

    console.log(getParamsList);

    getParamsList.forEach((getParameter) => {
        // console.log(getParameter.substring(0, 6) == "device")
        if(true === (getParameter.substring(0, 6) == "device")) {
            let anchorString = "#" + getParameter.substring(7);
            window.location.assign(anchorString);
        }
    });

}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    alert("mobile device");}
else{
    alert("No mobile device");
}    

