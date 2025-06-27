document.getElementById("upload-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.getElementById("file-input").files[0];
  const email = document.getElementById("email-input").value;
  const message = document.getElementById("message");

  if (!file || !email) {
    message.innerText = "Please select a CSV file and enter your email.";
    return;
  }

  // Demo logic (replace with real backend call)
  message.innerText = "Uploading your file... Please wait.";
  setTimeout(() => {
    message.innerText = "✅ Success! You will receive a cleaned CSV by email.";
  }, 2000);
});
