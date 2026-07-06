const socket = io();

const sendButton = document.getElementById("sendMessage");
const allMessages = document.getElementById("all-messages");

sendButton.addEventListener("click", () => {
  const messageInput = document.getElementById("messages");
  const message = messageInput.value.trim();

  socket.emit("message", message);

  messageInput.value = "";
});

socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
        <div class="message">
            <div class="img-container">
                <img src="/images/fotoPerfil.png" alt="foto de perfil">
            </div>

            <div class="message-body">
                <div class="user-info">
                    <span class="username">${user}</span>
                    <span class="time">Just a second ago</span>
                    <p>${message}</p>
                </div>
            </div>
        </div>
    `);

    allMessages.appendChild(msg);
});
