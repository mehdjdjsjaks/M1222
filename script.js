// باز و بسته کردن منوی کناری
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  if (menu.style.right === '0px') {
    menu.style.right = '-250px';
  } else {
    menu.style.right = '0px';
  }
}

// ارسال پیام
document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const input = document.getElementById('messageInput');
  const chatBox = document.getElementById('chatBox');
  const welcomeMessage = document.getElementById('welcomeMessage');

  if (input.value.trim() !== "") {
    const newMessage = document.createElement('div');
    newMessage.textContent = input.value;
    newMessage.style.padding = "10px";
    newMessage.style.marginTop = "10px";
    newMessage.style.background = "#e0e0e0";
    newMessage.style.borderRadius = "10px";
    newMessage.style.maxWidth = "70%";
    newMessage.style.marginRight = "auto";
    newMessage.style.marginLeft = "10px";

    chatBox.appendChild(newMessage);
    input.value = "";

    // بعد از اولین پیام نوشته خوشامد پاک شود
    if (welcomeMessage) {
      welcomeMessage.style.display = 'none';
    }
  }
}

// صدای خوشامدگویی
window.addEventListener('load', function() {
  const audio = document.getElementById('welcomeAudio');
  audio.play().catch(() => {
    console.log('صدا به خاطر محدودیت مرورگر، با کلیک کاربر فعال می‌شود.');
  });
});
