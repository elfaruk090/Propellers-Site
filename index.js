        // Get references to the input field, button, and players
        const videoUrlInput = document.getElementById('videoUrl');
        const embedButton = document.getElementById('embedButton');
        const iframePlayer = document.getElementById('iframePlayer');
        const videoPlayer = document.getElementById('videoPlayer');

        // Add event listener to the button
        embedButton.addEventListener('click', () => {
            const videoUrl = videoUrlInput.value.trim(); // Get the media URL

        // Hide both players initially
        iframePlayer.style.display = 'none';
        videoPlayer.style.display = 'none';

        // Check if the URL is a YouTube link
        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        const videoId = extractYouTubeID(videoUrl);
                if (videoId) {
                    iframePlayer.src = `https://www.youtube.com/embed/${videoId}?controls=1`;
                    iframePlayer.style.display = 'block';
                } else {
                    alert('Invalid YouTube URL.');
                }
            }
            // Check if the URL is a TikTok link
            else if (videoUrl.includes('tiktok.com')) {
                iframePlayer.src = `${videoUrl}`;
                iframePlayer.style.display = 'block';
            }
            // Otherwise, assume it's a direct video file (like MP4)
            else if (videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.ogg')) {
                videoPlayer.src = videoUrl;
                videoPlayer.style.display = 'block';
                videoPlayer.controls = true; // Enable controls for the <video> player
                videoPlayer.play();
            } else {
                alert('Unsupported media URL. Please provide a valid link.');
            }
        });

        // Function to extract YouTube video ID
        function extractYouTubeID(url) {
            const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
            const match = url.match(regExp);
            return match ? match[1] : null;
        }

        //For Hiden Download button
        const inputField = document.getElementById('videoUrl');
        const downloadButton = document.getElementById('downloadButton');

        inputField.addEventListener('input', () => {
        if (inputField.checkValidity()) {
        downloadButton.style.display = 'block'; // Show button when input is valid
        } else {
        downloadButton.style.display = 'none'; // Hide button otherwise
        }
        });