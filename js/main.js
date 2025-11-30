let card = document.querySelector(".card"); 

function app() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(item => {
        card.innerHTML += `
        <div class="box">
            <p>ID: ${item.id}</p>
            <i>Name: ${item.name}</i>
            <h1>Username: ${item.username}</h1>
            <p>Email: ${item.email}</p>
            <a href="http://${item.website}" target="_blank">Website: ${item.website}</a>
            <img src="https://picsum.photos/id/${item.id}/300/300/" alt="user image"> 
        </div>`;
        
      });
    });
}
app();