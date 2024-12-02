const fileInput = document.getElementById("fileInput");
const downloadBtn = document.getElementById("downloadButton");

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const fileUrl = fileInput.value.trim(); // Get the input value and trim whitespace
    if (fileUrl) {
        downloadBtn.innerText = "Downloading File...";
        fetchFile(fileUrl);
    } else {
        alert("Please enter a valid URL.");
    }
});

function fetchFile(url) {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.blob();
        })
        .then((file) => {
            let tempUrl = URL.createObjectURL(file); // Pass the blob to createObjectURL
            let aTag = document.createElement("a");
            aTag.href = tempUrl;
            aTag.download = url.split("/").pop(); // Extract file name from URL
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            URL.revokeObjectURL(tempUrl); // Revoke the temporary URL
            downloadBtn.innerText = "Download File"; // Reset button text
        })
        .catch(() => {
            downloadBtn.innerText = "Download File";
            alert("Failed to Download File!");
        });
}
