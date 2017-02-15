/**
 * Created by 粟少衡 on 2017/2/13.
 */
var bgmusic=document.querySelector('.bgmusic');
var audio=document.querySelector('.audio');
bgmusic.onclick=function () {
    if(audio.paused){
        audio.play();
        bgmusic.style.webkitAnimationPlayState='running';

    }else{
        audio.pause();
        bgmusic.style.webkitAnimationPlayState='paused';

    }
};