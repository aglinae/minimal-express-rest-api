const container = document.querySelector(".container");

async function getUsers() {
  const response = await fetch("http://localhost:5000/api/users");
  return response.json();
}
