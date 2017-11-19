
function toggleSong() {
    var song = document.querySelector('audio');

    if(song.paused == true) {
        console.log('Playing');
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
    }
    else {
        console.log('Pausing');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
    }
}

$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();

    if(name.length > 2) {
        var message = "Welcome, " +  name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    }
    else {
        $('#name-input').addClass('error');
    }
});
$('.play-icon').on('click',function() {
    toggleSong()
});
$('body').on('keypress',function(event) {
    if (event.keyCode == 32){
        toggleSong()
    }
});

function fancyTimeFormat(time)
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function updateCurrentTime() {
    var song = document.querySelector('audio');
    // console.log(song.currentTime);
    // console.log(song.duration);
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);

    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}
var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

$('#song1').click(function() {
    var audio = document.querySelector('audio');
    var currentSong = audio.src;
    if(currentSong.search(fileNames[0]) != -1)
    {
        toggleSong();
    }
    else {
        audio.src = fileNames[0];
        toggleSong();
    }
});

$('#song2').click(function() {
    var audio = document.querySelector('audio');
    var currentSong = audio.src;
    if(currentSong.search(fileNames[1]) != -1)
    {
        toggleSong();
    }
    else {
        audio.src = fileNames[1];
        toggleSong();
    }
});

$('#song3').click(function() {
    var audio = document.querySelector('audio');
    var currentSong = audio.src;
    if(currentSong.search(fileNames[2]) != -1)
    {
        toggleSong();
    }
    else {
        audio.src = fileNames[2];
        toggleSong();
    }
});

$('#song4').click(function() {
    var audio = document.querySelector('audio');
    var currentSong = audio.src;
    if(currentSong.search(fileNames[3]) != -1)
    {
        toggleSong();
    }
    else {
        audio.src = fileNames[3];
        toggleSong();
    }
});

var songlist = ['Tamma Song','Humma song','Nashe Si Chadh Gayi','The Breakup Song']

window.onload = function() {
    $('#song1 .song-name').text(songlist[0]);
    $('#song2 .song-name').text(songlist[1]);
    $('#song3 .song-name').text(songlist[2]);
    $('#song4 .song-name').text(songlist[3]);

    updateCurrentTime();
    setInterval(function() {
        updateCurrentTime();
    },1000);
}


