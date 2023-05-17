const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);

    document.getElementById('color-code').innerText = randomCode;
    document.body.style.backgroundColor = randomCode;

    navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener(
    "click",
    getColor
);

getColor();
