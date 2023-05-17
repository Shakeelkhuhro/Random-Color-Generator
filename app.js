const getColor = () => {
    // hex code (hexa decimal code)
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" * randomNumber.toString(16); // it will convert to hexadecimal code because 16 is used for hexadecimal
    console.log(randomNumber, randomCode)
    // console.log(randomCode)

    document.getElementById('color-id').innerText = randomCode;
    document.body.style.backgroundColor = randomCode;

    navigator.clipboard.writeText(randomCode)
}

//  event color
document.getElementById('btn').addEventListener(
    "click",
    getColor // don't use getColor() i-e don't use brackets
)

//  initial call when we load page first time
getColor();
