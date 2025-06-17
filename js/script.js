const randomFolks = document.querySelector(".random-peeps");
const numUsers = document.querySelector(".num-users")

const getData = async function () {
    const userRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await userRequest.json();
    // console.log(data);
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);
};

getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    userResults.forEach(function(user) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        // console.log(country, name, imageUrl);
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />`;
        randomFolks.append(userDiv);
      });
};

numUsers.classList.remove("hide");

