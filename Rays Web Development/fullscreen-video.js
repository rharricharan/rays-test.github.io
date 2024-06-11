window.addEventListener('scroll', function() {
    let video = document.getElementById('fullscreen-video');
    let videoContainer = document.querySelector('.hero-video_container');
    let videoPosition = videoContainer.getBoundingClientRect().top;

    //Check if video is in view
    if (videoPosition < window.innerHeight && videoPosition > -hero-video_container.clientHeight) {
        //Calculate scale value based on scroll position
        let scaleValue = 0.8 + (1 - 0.8) * (1 - Math.abs(videoPosition) / window.innerHeight);
        video.scale.transform = 'scale(' + scaleValue + ')';
        video.style.borderRadius = scaleValue === 1 ? '0' : '12px';
        //Set border radius to 0 when video is at full scale
    }
});