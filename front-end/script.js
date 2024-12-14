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
    "audio/wav",
    "audio/mp3",
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

  // Simulate a processing delay
  setTimeout(() => {
    // Simulate fetching processed document URL from the backend
    const fakeDocumentUrl = "https://example.com/minutes.pdf"; // Replace with backend-generated URL

    // Show success message and display the document
    statusMessage.textContent = "Processing complete! Your minutes of meeting document is ready.";
    documentViewer.src = fakeDocumentUrl;
    documentViewer.style.display = "block";

    // Provide download link
    const downloadLink = document.createElement("a");
    downloadLink.href = fakeDocumentUrl;
    downloadLink.textContent = "Download Minutes of Meeting";
    downloadLink.style.display = "block";
    downloadLink.style.marginTop = "10px";
    statusMessage.appendChild(downloadLink);
  }, 2000);
}
