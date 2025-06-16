const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const userRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await userRequest.json();
};