
var firstInput;
var secondInput;
var result;

function ambilData(){
    firstInput = document.querySelector("#inputOne").value;

    secondInput = document.querySelector("#inputTwo").value;
    result = document.querySelector("#result");
}

function tambah(){
    ambilData();
    var hasil = parseInt(firstInput) + parseInt(secondInput);
    result.innerText = hasil;
}

function kurang(){
    ambilData();
    var hasil = parseInt(firstInput) - parseInt(secondInput);
    result.innerText = hasil;
}

function kali(){
    ambilData();
    var hasil = parseInt(firstInput) * parseInt(secondInput);
    result.innerText = hasil;
}
function bagi(){
    ambilData();
    var hasil = parseInt(firstInput) / parseInt(secondInput);
    result.innerText = hasil;
}

function hapus(){
    document.querySelector("#calculator").reset();
    result.innerText = "____";
}