// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import YouTubeIframeLoader from 'youtube-iframe';
$(function() {
  if (/Android|iPad|iPhone|iPod|Windows Phone/i.test(navigator.userAgent)) {
    // Sorry mobile users, detecting autoplay videos is annoyingly hard.
    $('.disclaimer').remove();
  } else {
    var videos = ['F-oi62m6pdY', 'UBcR7tHa9jw', 'kbtYSxX9cT8', '0e5ZiSYSnzA', 'T4iAnZHsZVM', 'R9BFVLYqzrk'];
    $('#youtube').css('opacity', 0);
    YouTubeIframeLoader.load(function (YT) {
      var player = new YT.Player('youtube', {
        videoId: videos[Math.floor(Math.random() * videos.length)], // YouTube Video ID
        width: 1066,               // Player width (in px)
        height: 600,              // Player height (in px)
        playerVars: {
          autoplay: 1,        // Auto-play the video on load
          controls: 0,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            e.target.mute();
            function checkIfVideoPlaying() {
              if (player.getPlayerState() === 1) {
                $('#youtube').css('opacity', 1);
              } else {
                setTimeout(checkIfVideoPlaying, 100);
              }
            }
            checkIfVideoPlaying();
          }
        }
      });
    });
  }
});
/*

     */


/*
import Link from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  // console.log('Welcome to Yeogurt!');
});
*/
