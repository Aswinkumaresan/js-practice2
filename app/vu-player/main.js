let playBtn = document.getElementById('play');
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f10'),
    b10Btn = document.getElementById('b10'),
    volumeBtn = document.getElementById('volume'),
    volumeInputEle = document.getElementById('volume_slider'),
    fullScreenBtn = document.getElementById('full_screen'),
    swapQualityBtn = document.getElementById('swap_quality'),
    downloadBtn =document.getElementById('download'),
    video = document.getElementById('main-video');

    

function play(){
    console.log('Play the video',video);
    video.play();

}
function pause (){
    console.log('pause the video',video);
    video.pause();


}
function f10 (){
    //get current time
  
    // console.log(video.currentTime);
    let cTime = video.currentTime;
  
    //add 10s to current time
    cTime = cTime + 10;
   
    //play from the current updated time

    video.currentTime= cTime;
    video.play();
 

    
}
function b10(){
       //get current time
        let cTime = video.currentTime;
         //Substract 10s to current time
        cTime = cTime - 5;
           //play from the current updated time
        video.currentTime = cTime;
        video.play();
    
}
function volumeUpdate(){
    //Get slider Value
    let volumeInput = volumeInputEle.value;
    // console.log(volumeInput);

    volumeInput = volumeInput/100;
    console.log(volumeInput);

    //Aplly to the video

    video.volume= volumeInput;
    // let videoVolume = video.volume;
    // console.log('volumeUp',videoVolume);
    
}
// function volumeDown(){
//     let videoVolume = video.volume;
//     console.log('volumeUp',videoVolume);
    
// }
function full_screen(){
    
}
function swap_quality(){
    
}
function download (){
    
}

playBtn.addEventListener('click',play);
pauseBtn.addEventListener('click',pause);
f10Btn.addEventListener('click',f10);
b10Btn.addEventListener('click',b10);
volumeBtn.addEventListener('click',volumeUpdate);
// volumeDownBtn.addEventListener('click',volumeDown);
fullScreenBtn.addEventListener('click',full_screen);
swapQualityBtn.addEventListener('click',swap_quality);
downloadBtn.addEventListener('click',download);