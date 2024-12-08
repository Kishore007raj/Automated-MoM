function generateMinutes() {
    const fileInput = document.getElementById("meeting-media");
    const statusMessage = document.getElementById("status-message");
  
    if (!fileInput.files || fileInput.files.length === 0) {
      statusMessage.textContent = "Please upload a valid audio file.";
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
  
    if (!validFormats.includes(file.type)) {
      statusMessage.textContent = "Unsupported file format. Please upload a valid video or audio file.";
      return;
    }
  
    statusMessage.textContent = "Processing your file. Please wait...";
    
    setTimeout(() => {
      statusMessage.textContent = "Processing complete! Your minutes of meeting document is ready.";
      const downloadLink = document.createElement("a");
      downloadLink.href = "#"; 
      downloadLink.textContent = "Download Minutes of Meeting";
      downloadLink.style.display = "block";
      downloadLink.style.marginTop = "10px";
      statusMessage.appendChild(downloadLink);
    }, 3000); 
  }
  