function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNmbr = parseFloat(inputValue);
    return inputValueNmbr;
};

function getInnerTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNmbr = parseFloat(textValue);
    return textValueNmbr;
};


