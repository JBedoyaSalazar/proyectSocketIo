const loginButton = document.getElementById("login");

loginButton.addEventListener("click", () => {
  const username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Please enter a username.");
    return;
  }

  document.cookie = `username=${encodeURIComponent(username)}`;
  document.location.href = "/";
});
