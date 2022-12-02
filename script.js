console.log("Welcome to Spotify");
let audioElement = new Audio('songs/1.mp3');
//Songs
let masterPlay=document.getElementById('masterPlay');
let masterForward=document.getElementById('forward');
let masterBackward=document.getElementById('backward');
let myProgressBar=document.getElementById('myProgressBar');
let bottomSongName=document.getElementsByClassName('songInfoName');
let gif=document.getElementById('gif');
let lastclicked=null;
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Om Deva Deva", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "BATMAN gotham", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "A Man Without Love", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Laut Aao Mahi Bhai", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Laagi Chhoote", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Spotify Wrap Banane Wale Ladke", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Gypsy", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Kamariya Teri ", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Alag Aasmaan", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "The Boys Aai Aai Aa", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}
];

songItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0]=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});

gif.style.opacity=0;
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0)
{
    audioElement.play();
    masterPlay.src='logo.png';
    gif.style.opacity=100;

}
else{
    audioElement.pause();
    masterPlay.src='play.png';
    makeAllPlays();
    gif.style.opacity=0;
}
});
masterForward.addEventListener('click',()=>{
    if(lastclicked>=9) lastclicked=0;
    else lastclicked+=1;
    audioElement.src=songs[lastclicked].filePath;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.src='logo.png';
    gif.style.opacity=100;
    bottomSongName[0].innerText=songs[lastclicked].songName;
});
masterBackward.addEventListener('click',()=>{
    if(lastclicked<=0) lastclicked=0;
    else lastclicked-=1;
    audioElement.src=songs[lastclicked].filePath;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.src='logo.png';
    gif.style.opacity=100;
    bottomSongName[0].innerText=songs[lastclicked].songName;
});

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    console.log(myProgressBar.value);
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
});
const makeAllPlays=()=>{

    Array.from(document.getElementsByClassName('perSongPlay')).forEach((element)=>{
        element.firstChild.src='play.png';
    });        
};
Array.from(document.getElementsByClassName('perSongPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
           
            index=element.id
            
            if(lastclicked==index && !audioElement.paused)
            {
                audioElement.pause();
                masterPlay.src='play.png';
            }
            else{

                audioElement.src=songs[index].filePath;
                e.target.src='logo.png';
                audioElement.play();
                audioElement.currentTime=0;
                masterPlay.src='logo.png';
                lastclicked=index;
                gif.style.opacity=100;
                bottomSongName[0].innerText=songs[index].songName;
            }
            

    });
});







