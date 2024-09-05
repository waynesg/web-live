const channels = [
    { name: "CCTV-6电影", url: "https://mobilelive-ds.ysp.cctv.cn/ysp/2013693901.m3u8", live: true, group: "央视台", logo: "https://live.fanmingming.com/tv/CCTV6.png" },
    { name: "河北经济生活", url: "https://jwliveqxzb.hebyun.com.cn/pqys/pqys.m3u8", live: true, group: "地方台", logo: "https://example.com/hebei_logo.png" },
    { name: "河北影视", url: "https://jwcdnqx.hebyun.com.cn/live/yspd/1500k/tzwj_video.m3u8", live: true, group: "地方台", logo: "https://example.com/hebei_yingshi_logo.png" },
    { name: "新昌新闻综合", url: "https://l.cztvcloud.com/channels/lantian/SXxinchang2/720p.m3u8", live: true, group: "地方台", logo: "https://example.com/xinchang_logo.png" },
    { name: "香港电台RTHK33", url: "https://rthktv33-live.akamaized.net/hls/live/2101641/RTHKTV33/stream03/streamPlaylist.m3u8", live: true, group: "港澳台", logo: "https://example.com/rthk33_logo.png" },
    { name: "星河频道", url: "https://edge6a.v2h-cdn.com/xinghe/xinghe.stream/chunklist.m3u8", live: true, group: "其他", logo: "https://example.com/xinghe_logo.png" },
    { name: "香港电台RTHK34", url: "https://rthktv34-live.akamaized.net/hls/live/2101642/RTHKTV34/stream02/streamPlaylist.m3u8", live: true, group: "港澳台", logo: "https://example.com/rthk34_logo.png" },
    { name: "Cloudfront直播", url: "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_4.m3u8", live: true, group: "其他", logo: "https://example.com/cloudfront_logo.png" },
];

const playerElement = document.getElementById('player');
const channelsElement = document.getElementById('channels');

function createPlayer(url) {
    if (Hls.isSupported()) {
        const video = document.createElement('video');
        video.controls = true;
        video.style.width = '100%';
        video.style.height = '100%';
        playerElement.innerHTML = '';
        playerElement.appendChild(video);

        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    }
}

function createChannelButtons() {
    channels.forEach(channel => {
        const button = document.createElement('button');
        button.textContent = channel.name;
        button.className = 'channel-button';
        button.onclick = () => createPlayer(channel.url);
        channelsElement.appendChild(button);
    });
}

createChannelButtons();