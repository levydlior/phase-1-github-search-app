const gitForm = document.querySelector("#github-form");
const userList = document.querySelector("#user-list");

gitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = document.querySelector("#search").value;

  fetch(`https://api.github.com/search/users?q=${userValue}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((users) => renderUserNames(users.items));
});

function renderUserNames(users) {
  users.forEach((user) => {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const a = document.createElement("a");
    const repos = user.repos_url;

    h2.textContent = user.login;
    img.src = user.avatar_url;
    a.href = user.html_url;
    a.textContent = "Profile Link";
    a.target = "_blank";
    li.className;



    img.addEventListener('click', () => {
        const repoList = document.querySelector('#repos-list')
    fetch(repos, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((response) => response.json())
        .then(repos => repos.forEach(repo => {
            const li = document.createElement('li')
            li.textContent = repo.html_url
            repoList.appendChild(li)
        }));
    })


    li.append(h2, img, a);
    userList.appendChild(li);
  });
}

