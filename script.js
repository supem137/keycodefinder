document.addEventListener('keydown', gererateAsciiCode);
document.addEventListener('click', reload);

function gererateAsciiCode(event) {

    let keyCode = event.which;
    document.getElementById("key_code").innerHTML = keyCode;

    let key_code_style_set = document.getElementById('key_code');
    key_code_style_set.classList.add('key_code_style');


    if (event.key === ' ') {
        document.getElementById("lable_1").innerHTML = "You Pressed: Spacebar"
    } else {
        let keyName = event.key;
        document.getElementById("lable_1").innerHTML = "You Pressed: " + keyName;

    }

}

function reload() {
    location.reload();
}