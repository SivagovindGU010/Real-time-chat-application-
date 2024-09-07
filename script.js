// Simulating real-time functionality with JavaScript
document.getElementById('send-btn').addEventListener('click', function() {
  const messageInput = document.getElementById('message');
  const messageText = messageInput.value;

  if (messageText.trim() !== '') {
    addMessage(messageText, 'self');
    messageInput.value = ''; // Clear input after sending

    // Simulate receiving a response after 1 second
    setTimeout(() => {
      addMessage("This is a simulated reply!", 'received');
    }, 1000);
  }
});

// Function to add a new message to the chat box
function addMessage(text, type) {
  const messageList = document.getElementById('messages');
  const newMessage = document.createElement('li');
  
  newMessage.textContent = text;
  newMessage.classList.add(type);

  messageList.appendChild(newMessage);
  messageList.scrollTop = messageList.scrollHeight; // Scroll to the bottom
}
