let birthpalace = prompt("Төрсөн газар?");
let firstName = prompt("Нэр");
let address = prompt("Амьдардаг газар?");
window.location;
let role = "Developer";
const gif = `url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fwww.printmag.com%2Fwp-content%2Fuploads%2F2021%2F02%2F4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif%3Ffit%3D476%252C280%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.printmag.com%2Fdesign-news%2Fsomeone-just-bought-a-gif-for-half-a-million-dollars%2F&tbnid=vgsivvk1_g-ajM&vet=12ahUKEwiAzuWxh4v3AhWUAN4KHej7Ba0QMygAegUIARCKAg..i&docid=koxpwv53uWa9XM&w=476&h=280&q=gif&ved=2ahUKEwiAzuWxh4v3AhWUAN4KHej7Ba0QMygAegUIARCKAg)`;
const message = `${birthpalace.toUpperCase()}-ын унаган хүү ${firstName.toUpperCase()} юмсанжээ. Тэрээр ${address}-д амьдардаг юм бнлээ`;

document.querySelector("main").innerHTML = `<p>${message}</p>`;

console.log(message);
