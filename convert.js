convertChemistry = (str) => {
    let resultString = "";
    for (i of str){
        if (isNaN(parseInt(i)))
            resultString += i;
        else 
        resultString += "<sub>" + i + "</sub>";
            
    }
    return resultString;
}