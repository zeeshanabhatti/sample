 <script>
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '600',
          width: '800',
          videoId: 'e4ulchfPJa8',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
        document.getElementById('timeline').max = player.getDuration();
      }

      function onPlayerStateChange(event) {
        setInterval(updateTimeline, 1000);
      }

      function updateTimeline() {
        document.getElementById('timeline').value = player.getCurrentTime();
      }

      function seekVideo(value) {
        player.seekTo(value);
      }

      function playVideo() {
        player.playVideo();
      }

      function pauseVideo() {
        player.pauseVideo();
      }

      function forwardVideo() {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime + 10);
      }

      function reverseVideo() {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 10);
      }

      function fullScreen() {
        var iframe = document.getElementById('player');
        iframe.requestFullscreen();
      }
      
      function setVolume(value) {
       player.setVolume(value);
      }
    </script>
    <script src="https://www.youtube.com/iframe_api"></script>