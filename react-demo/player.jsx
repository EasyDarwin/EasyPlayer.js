// 创建 Player 组件
function Player() {
  const myRef = React.useRef(null); // 用于引用 DOM 元素
  const easyPro = React.useRef(null); // 存储播放器实例

  // 视频流地址
  const [url, setUrl] = React.useState(
    "http://212.64.34.165:28080/live/34020000001320000001_34020000001320000001.flv?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjAsIlVzZXJuYW1lIjoiMzQwMjAwMDAwMDEzMjAwMDAwMDFfMzQwMjAwMDAwMDEzMjAwMDAwMDEiLCJHcm91cElEIjowLCJHcm91cExldmVsIjowLCJSb2xlIjoiIiwiTGV2ZWwiOjAsImlzcyI6Inh4QGdvbGFuZy5zcGFjZSIsImV4cCI6MTczNTEwODc4OSwiaWF0IjoxNzI4ODg3OTg5fQ.ReWdscP3N1GfdrfOtv2BGeHINWmfnPUbu4G_mMiCwKQ&expired=20241225143949"
  );

  // 配置项
  const config = {
    isLive: true,
    bufferTime: 0.2,
    stretch: false,
    MSE: true,
    WCS: true,
    hasAudio: true,
  };

  // 在组件挂载后创建播放器实例
  React.useEffect(() => {
    if (easyPro.current) {
      easyPro.current.destroy().then(() => {
        create();
      });
    } else {
      create();
    }
  }, [url]);

  // 创建播放器实例
  const create = () => {
    easyPro.current = new window.EasyPlayerPro(myRef.current, {
      isLive: config.isLive,
      bufferTime: config.bufferTime,
      stretch: config.stretch,
      MSE: config.MSE,
      WCS: config.WCS,
      hasAudio: config.hasAudio,
      watermark: { text: { content: "easyplayer-pro" }, right: 10, top: 10 },
    });
    play();
  };

  // 播放视频
  const play = () => {
    if (!easyPro.current) return create();
    easyPro.current
      .play(url)
      .then(() => {
        console.log("player started");
      })
      .catch((e) => {
        console.error("error", e);
      });
  };

  return (
    <div>
      <div
        style={{ width: "640px", height: "360px", backgroundColor: "#000000" }}
        ref={myRef}
      ></div>
      <input
        style={{ width: "640px", marginTop: "10px" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
console.log("root", root);

root.render(<Player />);
