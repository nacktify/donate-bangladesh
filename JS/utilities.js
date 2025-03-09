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


function showSecbyId(id) {
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation').classList.add('hidden');
    //show the section
    document.getElementById(id).classList.remove('hidden');


}