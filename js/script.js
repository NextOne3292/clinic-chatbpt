// Add messages to chat window
function addMessage(text, sender) {
    const chatbox = document.getElementById("chatbox");

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);
    msgDiv.innerText = text;

    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Main chatbot logic
function handleChat() {
    const input = document.getElementById("message");
    const userMsg = input.value.trim().toLowerCase();

    if (userMsg === "") return;

    addMessage(input.value, "user");

    let botReply = "";

    if (userMsg === "hi" || userMsg === "hello") {
        botReply = "Hello! Welcome to CityCare Clinic. How may I help you?";
    } else if (userMsg.includes("hours") || userMsg.includes("time")) {
        botReply = "We are open from 9 AM to 6 PM, Monday to Saturday.";
    } else if (userMsg.includes("doctor")) {
        botReply = "Dr. Smith (General), Dr. John (Dentist), Dr. Anne (Pediatrician).";
    } else if (userMsg.includes("appointment")) {
        botReply = "Sure! Please enter the doctor name and preferred time slot.";
    } else if (userMsg.includes("location") || userMsg.includes("address")) {
        botReply = "We are at 123 Health Street, near City Mall.";
    } else if (userMsg.includes("contact") || userMsg.includes("phone")) {
        botReply = "You can call us at +91-9876543210.";
    } else if (userMsg.includes("emergency")) {
        botReply = "Please call 112 or go to the nearest hospital immediately.";
    } else if (userMsg.includes("bye")) {
        botReply = "Take care! Thank you for contacting CityCare Clinic.";
    } else {
        botReply = "I'm sorry, I didn't understand that. Can you please rephrase?";
    }

    setTimeout(() => {
        addMessage(botReply, "bot");
    }, 400);

    input.value = "";
}

// Button click handler
document.getElementById("sendBtn").addEventListener("click", handleChat);
