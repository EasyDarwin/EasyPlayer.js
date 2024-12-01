# 文档

## 简介

EasyPlayer.js H5播放器，是一款能够同时支持HTTP、HTTP-FLV、HLS（m3u8）、WS、WEBRTC、FMP4视频直播与视频点播等多种协议，支持H.264、H.265、AAC、G711A、Mp3等多种音视频编码格式，支持MSE、WASM、WebCodec等多种解码方式，支持Windows、Linux、Android、iOS全平台终端的H5播放器，使用简单, 功能强大。

## 功能说明
- [x] 支持 MSE H264和H265硬解码;
- [x] 支持 WebCodec H264和H265硬解码;
- [x] 支持 WASM H264和H265硬解码/软解码;
- [x] 支持 m3u8/HLS (H265/H265)播放;
- [x] 支持 Mpeg4格式(H264)播放;
- [x] 支持 HTTP-FLV/WS-FLV (H265/H265)播放;
- [x] 支持 HTTP-FMP4/WS-FMP4 (H265/H265)播放;
- [x] 支持 WEBRTC(easy支持H264/H265、其他流媒体支持H264)播放;
- [x] 支持 裸流(H264/H265) 播放;
- [x] 支持 直播和点播播放;
- [x] 支持 点播多清晰度播放;
- [x] 支持 全屏或比例显示;
- [x] 支持 电子放大;
- [x] 支持 水印(动态水印、幽灵水印);
- [x] 支持 显示上一个视频最后一帧;
- [x] 支持 播放器快照截图;
- [x] 支持 视频录制(WebM格式(音频+视频)、Mp4格式(视频),Flv格式(音频+视频));
- [x] 支持 超时、断网重连、异常暂停播放等;
- [x] 支持 解析视频i帧文件转base64;

## 案例演示
演示地址: https://www.easydarwin.org/easyplayer.js/index.html
## 播放器实例
new EasyPlayerPro(container, config)
## 配置容器 container
container 获取dom 节点

例: var container = document.getElementById("id");
## 配置属性 config


| 参数               | 说明                                             | 类型                       | 默认值 |
| ------------------ | ------------------------------------------------ | -------------------------- | ------ |
| isLive | 是否直播 | Boolean | true |
| hasAudio | 是否解析音频 | Boolean | true |
| isMute | 是否渲染音频 | Boolean | false |
| stretch | 视频拉伸 | Boolean | true |
| poster             | 视频封面图片                                     | String                     | -      |
| bufferTime                | 加载显设置最小缓冲时长，单位秒，播放器会自动消除延迟。       | Number                     | 1 |
| loadTimeOut                | 视频加载超时,单位秒。    | Number                     | 10 |
| loadTimeReplay                | 重连次数 -1为一直加载。    | Number                     | 3 |
| MSE | MSE模式 | Boolean | fasle |
| WCS | WCS模式 | Boolean | fasle |
| WASM | WASM模式 | Boolean | fasle |
| WASMSIMD |WASMSIMD模式                                     | Boolean                    | false   |
| gpuDecoder |硬解码                                    | Boolean                    | false   |
| webGPU |渲染方式                                       | Boolean                    | false   |
| canvasRender |渲染容器                                   | Boolean                    | false   |
| isRtcSRS |SRS类型                                   | Boolean                    | false   |
| isRtcZLM |ZLM类型                                   | Boolean                    | false   |
| watermark         | 水印      | Object |  {text: {content:'test',color:'',opacity:,fontSize:''},right: 0,top: 0}   |
| fullWatermark         | 全屏水印      | Object | {text: 'test',angle:'',color:'',fontSize: '',opacity:''}   |
| quality         | 配置清晰      | Array | ['普清', '高清', '超清', '4K', '8K']   |
| defaultQuality  |  默认显示的清晰度，如果不设置，会显示第一个清晰度                                    | String | -   |
| debug | 控制台日志打印 | Boolean | false |
注: 

    1.解码模式 MSE > WCS > wasm(simd适合高分辨率)
 
## 事件回调

| 事件名      | 说明         |
| ---------- | ------------ |
| play       | 播放事件      |
| pause      | 暂时事件      |
| videoInfo      | 视频信息      |
| audioInfo      | 音频信息      |
| fullscreen      | 全屏      |
| mute      | 音频      |
| kBps      | 当前网速， 单位KB 每秒1次,      |
| screenshots      | 截图回调    |
| contextmenuClose      | 右击关闭回调    |
| decodeHevc      | 视频编码回调    |
| liveEnd      | 直播结束的事件    |
| timeout      | 加载超时    |
| recordEnd      | 录制结束的事件    |
| recordStart      | 录制开始的事件    |
| fullscreen | 当前是否全屏|
| qualityChange | 清晰度回调 |
| playbackSeek | 录像时间轴跳转回调 |
| playbackRate | 录像倍数的回调 |
| timestamps | 播放时间回调 |
| error      | 播放异常      |

案例 
```js
EasyPlayrPro.on('play', function () {
    console.log('play');
})
```

## 方法

| 方法名      | 说明         | 参数                  |
| ---------- | ------------ | ---------------------|
| play         | 播放      |         'url'            |
| pause      | 暂停播放    |               |
| isPause      | 返回是否暂停中状态    |               |
| setMute      | 音频    |      true|false         |
| isMute      |  返回是否静音    |               |
| screenshot         | 获取快照      |('test', 'png \| jpeg', '0-1(压缩率)','download \| base64 \| blob')|
| setFullscreen      |  全屏(取消全屏)播放视频    |               |
| exitFullscreen      | 退出全屏    |               |
| setQuality      |  设置分辨率必须是quality里面的数据    |               |
| setRate      |  设置录像倍数    |               |
| seekTime      |  设置录像跳转时间/s     |               |
| getVideoInfo      |  获取视频信息    |               |
| getAudioInfo      |  获取音频信息    |               |
| destroy      | 关闭视频，释放底层资源    |               |

screenshot 截图，调用后弹出下载框保存截图

    filename: 可选参数, 保存的文件名, 默认 时间戳
    format : 可选参数, 截图的格式，可选png或jpeg或者webp ,默认 png
    quality: 可选参数, 当格式是jpeg或者webp时，压缩质量，取值0 ~ 1 ,默认 0.92
    type: 可选参数, 可选download或者base64或者blob，默认download
案例:
```js
const base64 = EasyPlayerPro.screenshot("test", "png", 0.5, 'base64')
```



## 更多流媒体音视频资源

技术专线：188-5511-2020（同微信）

EasyDarwin开源流媒体服务器：<a href="http://www.easydarwin.org" target="_blank" title="EasyDarwin开源流媒体服务器">www.EasyDarwin.org</a>
