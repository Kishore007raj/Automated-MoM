function generateMinutes() {
  const fileInput = document.getElementById("meeting-video");
  const statusMessage = document.getElementById("status-message");
  const documentViewer = document.getElementById("document-viewer");

  // Reset UI
  statusMessage.textContent = "";
  documentViewer.style.display = "none";

  // Check if a file is selected
  if (!fileInput.files || fileInput.files.length === 0) {
    statusMessage.textContent = "Please upload a valid audio or video file.";
    return;
  }

  const file = fileInput.files[0];
  const validFormats = [
    "video/mp4",
    "audio/mp4",
    "audio/wav",
    "audio/mp3",
    "audio/mp4",
    "audio/flac",
    "audio/aac",
    "audio/m4a",
    "audio/ogg",
    "audio/x-ms-wma"
  ];

  // Check if the file format is valid
  if (!validFormats.includes(file.type)) {
    statusMessage.textContent = "Unsupported file format. Please upload a valid video or audio file.";
    return;
  }

  // Update the status message
  statusMessage.textContent = "Processing your file. Please wait...";

  const formData = new FormData();
  formData.append("meeting-video", file);

  // Make AJAX request to Flask backend
  fetch('/generate', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Show success message and display the document download link
      statusMessage.textContent = "Processing complete! Your minutes of meeting document is ready.";
      const downloadLink = document.createElement("a");
      downloadLink.href = data.docx_url;
      downloadLink.textContent = "Download Minutes of Meeting";
      downloadLink.style.display = "block";
      downloadLink.style.marginTop = "10px";
      statusMessage.appendChild(downloadLink);
    } else {
      statusMessage.textContent = "There was an error processing your file. Please try again.";
    }
  })
  .catch(error => {
    statusMessage.textContent = "An error occurred. Please try again.";
    console.error(error);
  });
}
