var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

//genre check
var pop = 0;
var alternative = 0;
var rock = 0;
var chill = 0;

<!---------function for toggle song------------------> 

function toggleSong(){
		var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
	
	    }
<!---------------------current time and progress bar---------------------------------->       
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
                //console.log(song.currentTime);
                //console.log(song.duration);
                var currentTime = Math.floor(song.currentTime);
                currentTime=fancyTimeFormat(currentTime);
                var duration = Math.floor(song.duration);
                duration = fancyTimeFormat(duration)
                $('.time-elapsed').text(currentTime);
                $('.song-duration').text(duration);
                }
<!------------------ variables for song--------------------------------------->
var songs_pop = [{
					   'name': 'Figure',
					   'artist': 'Linkin Park',
					   'album': 'Minutes to  Midnight',
					   'duration': '3:17',
					   'fileName': 'song1.mp3',
					   'image': 'song1.jpg'
                     },
                     {
          
			
						'name': 'Enjoy the silence',
						'artist': 'Linkin Park',
						'album': 'Single',
						'duration': '3:33',
						'fileName': 'song2.mp3',
						'image': 'song2.jpg'			
                     },
                     {
          
			           'name': 'By myself',
						'artist': 'Greenday',
						'album': 'Singlel',
						'duration': '2:29',
						'fileName': 'song4.mp3',
						'image': 'song4.jpg'	
                     },
                     {
                       'name': 'A place for my head',
						'artist': 'Linkin Park',
						'album': 'Hybrid theory',
						'duration': '3:04',
						'fileName': 'song3.mp3',
						'image': 'song3.jpg'
                      }
                      ]

var songs_rock = [{
                        'name': 'Pushing me away',
						'artist': 'Linkin Park',
						'album': 'Collision course',
						'duration': '5:04',
					    'fileName': 'song13.mp3',
					    'image': 'song13.jpg'
                     },
                     {
                        'name': 'In the end 2',
						'artist': 'Motion man',
						'album': 'NO more',
						'duration': '4:00',
						'fileName': 'song14.mp3',
						'image': 'song14.jpg'
                     },
                     {
                   
                        'name': 'Runaway'
						'artist': 'Linkin Park',
						'album': 'Hybrid',
						'duration': '3:13',
						'fileName': 'song16.mp3',
						'image': 'song16.jpg'
                     },

                     {
                        'name': 'One Step closer',
						'artist': 'Linkin Park',
						'album': '1989',
						'duration': '5:46',
						'fileName': 'song15.mp3',
						'image': 'song15.jpg'
                     }]


var songs_alternative = [{
                       'name': 'Run away ',
						'artist': 'Lnkin park',
						'album': 'Minutes to midnight',
						'duration': '3:03',
					    'fileName': 'song5.mp3',
					    'image': 'song5.jpg'
                     },
                     {
                       'name': 'With you',
						'artist': 'Linkin park',
						'album': 'Single',
						'duration': '3:23',
						'fileName': 'song6.mp3',
						'image': 'song6.jpg'
                     },
                     {
						'name': 'In the end',
						'artist': 'LP',
						'album': 'Hybrid theory',
						'duration': '4:39',
						'fileName': 'song7.mp3',
						'image': 'song7.jpg'
					},
                    {
                       'name': 'My december',
						'artist': 'Mike Shinoda',
						'album': 'Encore',
						'duration': '4:17',
						'fileName': 'song8.mp3',
						'image': 'song8.jpg'
                     }]


var songs_chill = [{
                        'name': 'Pushing me away',
						'artist': 'Linkin Park',
						'album': 'Collision course',
						'duration': '5:04',
					    'fileName': 'song13.mp3',
					    'image': 'song13.jpg'
                     },
                     {
                        'name': 'In the end 2',
						'artist': 'Motion man',
						'album': 'NO more',
						'duration': '4:00',
						'fileName': 'song14.mp3',
						'image': 'song14.jpg'
                     },
                     {
                   
                        'name': 'Runaway'
						'artist': 'Linkin Park',
						'album': 'Hybrid',
						'duration': '3:13',
						'fileName': 'song16.mp3',
						'image': 'song16.jpg'
                     },

                     {
                        'name': 'One Step closer',
						'artist': 'Linkin Park',
						'album': '1989',
						'duration': '5:46',
						'fileName': 'song15.mp3',
						'image': 'song15.jpg'
                     }]

<!----------- song detail--------->
        function addSongNameClickEvent(songObj,position) {
				var id = '#song' + position;
				var songName = songObj.fileName;   
				 $(id).click(function() {
			   // console.log("running");
				
				var audio = document.querySelector('audio');
				var currentSong = audio.src;
            
                if(currentSong.search(songName) != -1)
                   {
                     //   console.log(" running next");
                       
                       toggleSong();
                    }
                else {
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                        $('#now-playing').removeClass('run-animation');
                        setTimeout(function(){
                          $('#now-playing').addClass('run-animation');
                        },10);
                        console.log("i'm runn");
                        
                    }
                  });
                 }    


		


<!-------------current song detail----------------->
				
		function changeCurrentSongDetails(songObj) {
		    $('.current-song-image').attr('src','img/' + songObj.image)
			$('.current-song-name').text(songObj.name)
			$('.current-song-album').text(songObj.album)
		}
<!-----------welcome screen button---------->	
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
		



 function whichPlaylist(){

        if(pop == 1){

            songs = songs_pop;
        }
        else if(chill == 1){
            console.log("chill run");
            songs = songs_chill;
        }

        else if(rock == 1){
            console.log("rock run");
            songs = songs_rock;
        }
        
        else if(alternative == 1){

            songs = songs_alternative;
        }
        
       

        return songs;
    }

	
		  function updateSongList(){
        songs=whichPlaylist();
        console.log(songs[1]);
        for(var i =0; i < songs.length;i++) {
                var songObj = songs[i];
                var name = '#song' + (i+1);
                var song = $(name);
                updateCurrentTime(); 
                setInterval(function() {
                updateCurrentTime();
                },1000);
                song.find('.song-name').text(songObj.name);
                song.find('.song-artist').text(songObj.artist);
                song.find('.song-album').text(songObj.album); // Added
                song.find('.song-length').text(songObj.duration); // Added
                addSongNameClickEvent(songObj,i+1);
       
            }
        songs_table=$('#songs').DataTable({
                    paging:false
                });
                      

    }

 //Trigger Song on click play icon
    $('.play-icon').on('click', function() {
         toggleSong();
    });

    //Trigger spacebar controls
    $('body').on('keypress', function(event) {
                var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT') {
                    toggleSong();
                }
            }); 

    //Trigger Looping   
    $('.fa-repeat').on('click', function(){
        console.log("checked looping");
        willLoop =1-willLoop;
        $('.fa-repeat').toggleClass('disabled');
    });


	 $('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
        // Play the next song
        var nextSong = songs[currentSongNumber];
        //console.log(nextSong.filename);
        audio.src = nextSong.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSong);
        currentSongNumber = currentSongNumber+1;
    }
    else {
        // Stop Playing
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
});		


     $('#mood-chill').on('click',function(){
       if(typeof songs_table != 'undefined' ){
          songs_table.destroy();
       }
        chill=1;
        pop=rock=alternative=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });


    $('#mood-rock').on('click',function(){
           if(typeof songs_table != 'undefined'){
            songs_table.destroy();
        } 
        rock=1;
        pop=chill=alternative=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });

    $('#mood-pop').on('click',function(){
         if(typeof songs_table != 'undefined'){
           songs_table.destroy();
        }
        pop=1;
        chill=rock=alternative=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn')
    });


    $('#mood-alternative').on('click',function(){
           if(typeof songs_table != 'undefined'){
            songs_table.destroy();
        }
        alternative=1;
        pop=rock=chill=0;
        updateSongList();
        $('.mood-sorting').addClass('hidden');
        $('.content').removeClass('hidden');
        $('.content').addClass('animated zoomIn');
    });






    $('#back').on('click',function(){

        $('.content').addClass('hidden');
        $('.mood-sorting').removeClass('hidden');
        $('.mood-sorting').addClass('animated zoomIn');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
          song = document.querySelector('audio');
                song.pause();
        
    })

	

<!-------------------volume slider ka code---------------------------->
    //////////////////////////////volumeslider function///////////////////////////////
function setvolume() 
{						
	var song = document.querySelector('audio');
	song.volume = slider.value/100;
}
// increase and decrease the volume by volume slider		
$('#slider').on('mousemove', function() 
{								
	setvolume();
});

/////////////////increase the volume of sidebar on click/////////////////
$('#slider').on('click', function() 
{								
	setvolume();
});

<!---------------------------mute unmute------------------------------->
$('.fa-volume-up').on('click',function(){        //mute and unmute the song
	 var audio = document.querySelector('audio');
	 if(mute == 0){
		 audio.muted = true;
		 mute = 1;
		 console.log('mute');
		 $('.mute').removeClass('fa-volume-up').addClass('fa-volume-off');
	 }
	 else {
		  audio.muted = false;
		  mute = 0;
		  console.log('unmute')
		   $('.mute').removeClass('fa-volume-off').addClass('fa-volume-up');

	 }
});
	             
				
					
					
					
					
					
					//var songList = ['Starving', 'humma humma', 'Nashe Si Chadh Gayi', 'badri ki dulhaniya']; 
				   // var	fileName = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
					//var artistList = ['neha kakar', 'arjit singh', 'sonu  nigam', 'jubin nautiyal'];
					//var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
					//var durationList = ['2:56','3:15','2:34','2:29'];
					
									
					//addSongNameClickEvent(fileName[0],1);
					//addSongNameClickEvent(fileName[1],2);
					//addSongNameClickEvent(fileName[2],3);
					//addSongNameClickEvent(fileName[3],4);
					
					//for (var i = 0; i < fileName.length ; i++) {
					//addSongNameClickEvent(fileName[i],i+1);
				    //} 
										
					
					
					
					
					          
                        