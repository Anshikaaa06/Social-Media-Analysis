document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(message, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleSendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, true);
        messageInput.value = '';

        try {
            const response = await fetch('/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            
            // Add AI response after a small delay
            setTimeout(() => {
                addMessage(data.response);
            }, 500);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, there was an error processing your request.');
        }
    }

    // Send button click handler
    sendButton.addEventListener('click', handleSendMessage);

    // Enter key handler
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Add welcome message
    addMessage('Hello! Ask me about social media performance metrics and trends. Try asking about post timing or performance trends!');
});