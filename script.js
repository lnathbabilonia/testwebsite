const texts = ["IT Support", "Aspiring Programmer"];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    // Type out the current text
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200); // Typing speed (milliseconds)
    } else {
        // Pause after completing the text
        setTimeout(() => {
            // Clear the text for the next iteration
            typingText.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            type(); // Start typing the next text
        }, 1000); // Pause duration before starting the next word
    }
}


window.onload = type;

function openPDF() {
    window.open('files/resume.pdf', '_blank'); // Opens the PDF in a new tab
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
function downloadResume() {
  const confirmDownload = confirm("Do you want to download the resume?");
  if (confirmDownload) {
      window.location.href = 'files/resume.pdf';
  }
}

const form = document.querySelector('form');
                const responseMessage = document.getElementById('response-message');
        
                form.addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent the default form submission
        
                    fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            responseMessage.textContent = "Thank you for your message!";
                            form.reset(); // Clear the form

                            setTimeout(() => {
                                responseMessage.textContent = "";
                            }, 2000);

                        } else {
                            responseMessage.textContent = "There was a problem sending your message.";
                        }
                    })
                    .catch(error => {
                        responseMessage.textContent = "There was a problem sending your message.";
                    });
                });
