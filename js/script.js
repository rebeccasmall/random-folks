const randomFolks = document.querySelector(".random-peeps");
const numUsers = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUser) {
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUser}`);
    const data = await userRequest.json();
    // console.log(data);
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);
};

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

selectUserNumber.addEventListener("change", function (e) {
    let numUser = e.target.value;
    getData(numUser);
});

getData(1);