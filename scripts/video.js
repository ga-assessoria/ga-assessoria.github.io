const observer = new IntersectionObserver((entries) => { 
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if(entry.isIntersecting){
            video.play();
            video.muted = "";
            return;
        }

        video.pause(); 
        video.muted = "muted";
    });
});
observer.observe(document.querySelector('.youtube-video'));