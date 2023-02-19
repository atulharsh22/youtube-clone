
const video_details_div = document.getElementById('video_details'); 

const playVideo = () => {
    let {videoId} = JSON.parse(localStorage.getItem('clicked_item'));
    
    //show video - iframe (maps,audio,video)
    let iframe =document.createElement('iframe');
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1`;

    iframe.width='100%';
    iframe.height='100%';
    iframe.setAttribute('allowfullscreen',true);
    video_details_div.append(iframe);
}