//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]'
//AIzaSyC9bdpJR8txPYKLnEQr6NAK5OXo2b14C78

const API_KEY = `AIzaSyC9bdpJR8txPYKLnEQr6NAK5OXo2b14C78`;

const container_div = document.getElementById("container");

const searchVideos = async () => {
    try{
        const query = document.getElementById("query").value;
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`);
        const data = await res.json();
        //console.log('data:',data);
        const actual_data = data.items;
        appendVideos(actual_data);
        //console.log('data:',data);
    }catch(error){
        console.log('error:',error);
    }
}

const appendVideos = async (data) => {

    container_div.innerHTML=null;

    data.forEach(({snippet,id}) => {
        //console.log(el);
        const title = snippet.title;
        const videoId = id.videoId;
        const thumbnail = snippet.thumbnails.high.url;
        const channel_name = snippet.channelTitle;

        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = thumbnail;

        const title_html = document.createElement('h4');
        title_html.innerText = title;

        const channel_html = document.createElement('h5');
        channel_html.innerText = channel_name;

        // div.addEventListener("click",function(){});

        let data = {
            // videoId:videoId,
            videoId,
            snippet
        };
        div.onclick = () => {
            storeClickedvideo(data);
        }

        div.append(img,title_html,channel_html);
        container_div.append(div);
    });
}



function storeClickedvideo(data){

    localStorage.setItem("clicked_item",JSON.stringify(data));
    window.location.href='video.html';
}


const trendVideos = async () => {
    try{
        const query = "Popular videos in India";
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`);
        const data = await res.json();
        const actual_data = data.items;
        appendVideos(actual_data);
        //console.log('data:',data);
    }catch(error){
        console.log('error:',error);
    }
}
trendVideos();