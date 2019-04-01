
function tambah(){
    var firstInput = document.querySelector("#inputOne").value;

    var secondInput = document.querySelector("#inputTwo").value;
    var result = document.querySelector("#result");

    var sum = parseInt(firstInput) + parseInt(secondInput);
    result.innerText = sum;
}

function kurang(){

}