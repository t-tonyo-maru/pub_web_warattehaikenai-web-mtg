import './reset.css';
import './style.css';
import * as faceapi from 'face-api.js';
import GUI from 'lil-gui';

const GITHUB_PAGES_PATH = '/pub_web_warattehaikenai-web-mtg';
const SCREEN = { w: 640, h: 480 } as const;
const IDLING_TIME = 5 * 1000; // アイドリングタイム。デフォルトは 5s
const DEFAULT_SMILE_BORDER_LINE = 0.5; // 笑顔の判定ライン
const DEFAULT_SE_VOLUME = 0.25; // SE の音量
const DEFAULT_IS_PLAY_SE = true; // SE を再生するか
const DEFAULT_OUT_USER_NAME = '田中'; // OUT のユーザー名
const DECREMENT_TIME = 100; // setTimeout で利用する間隔

const run = async () => {
  // 各種変数
  let isOut = false;
  let lastOutTime = 0;
  let smileBorderLine = DEFAULT_SMILE_BORDER_LINE;
  let outUserName = DEFAULT_OUT_USER_NAME;

  // HTML 要素
  const app = document.getElementById('app') as HTMLDivElement;
  const videoEl = document.getElementById('video') as HTMLVideoElement;
  const seEl = document.getElementById('se') as HTMLVideoElement;
  seEl.volume = DEFAULT_SE_VOLUME;

  // コントロールパネル
  const gui = new GUI();
  gui
    .add({ smileBorderLine }, 'smileBorderLine', 0.25, 1, 0.01)
    .name('笑顔の判定ライン')
    .onChange((value: number) => {
      smileBorderLine = value;
    });
  gui
    .add({ volume: DEFAULT_SE_VOLUME }, 'volume', 0, 1, 0.01)
    .name('SE のボリューム')
    .onChange((value: number) => {
      seEl.volume = value;
    });
  gui
    .add({ isPlay: DEFAULT_IS_PLAY_SE }, 'isPlay')
    .name('SE を再生する')
    .onChange((value: boolean) => {
      seEl.muted = !value;
    });
  gui
    .add({ outUserName }, 'outUserName')
    .name('罰ゲーム対象者')
    .onChange((value: string) => {
      outUserName = value;
    });

  /**
   * face-api
   * 参考URL: https://qiita.com/ymmt1089/items/4e35a7ba62d38c568cb6
   */
  // モデルの読み込み
  // https://github.com/justadudewhohacks/face-api.js/tree/master/weights
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(`${GITHUB_PAGES_PATH}/weights`),
    faceapi.nets.faceLandmark68Net.loadFromUri(`${GITHUB_PAGES_PATH}/weights`),
    faceapi.nets.faceRecognitionNet.loadFromUri(`${GITHUB_PAGES_PATH}/weights`),
    faceapi.nets.faceExpressionNet.loadFromUri(`${GITHUB_PAGES_PATH}/weights`),
    faceapi.nets.ageGenderNet.loadFromUri(`${GITHUB_PAGES_PATH}/weights`)
  ])
    .then(async () => {
      // モデルの読み込み後に、Webカメラの許可をユーザーに求める
      return await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: SCREEN.w },
          height: { ideal: SCREEN.h }
        }
      });
    })
    .then((stream) => {
      videoEl.srcObject = stream;
    })
    .catch((error) => {
      console.error(error);
    });

  // Webカメラが許可され、video に展開されたときに発火する関数
  videoEl.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(videoEl);
    canvas.id = 'canvas';
    canvas.width = SCREEN.w;
    canvas.height = SCREEN.h;
    app.append(canvas);
    const context = canvas.getContext('2d');

    faceapi.matchDimensions(canvas, {
      width: SCREEN.w,
      height: SCREEN.h
    });

    const detectFaces = async () => {
      const detections = await faceapi
        .detectAllFaces(videoEl, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender();
      const resizedDetections = faceapi.resizeResults(detections, {
        width: SCREEN.w,
        height: SCREEN.h
      });

      if (context) context.clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

      if (isOut && context) {
        // 「〇〇 OUT」を描画する
        const text = `${outUserName} OUT`;
        context.font = 'bold 48px Arial';
        context.textAlign = 'center';
        context.strokeStyle = 'white';
        context.lineWidth = 4;
        context.strokeText(text, canvas.width / 2, canvas.height - 40);
        context.fillStyle = 'red';
        context.fillText(text, canvas.width / 2, canvas.height - 40);
        // text align をリセット
        context.textAlign = 'left';
      }

      for (const detection of resizedDetections) {
        // face-api のボックスの描画
        const drawBox = new faceapi.draw.DrawBox(detection.detection.box, {});
        drawBox.draw(canvas);

        // detection.expressions.happy から「ユーザーが笑顔か」を判定する
        // ババーン！は連続発火させずに、アイドリングタイム分だけ処理を間引く
        if (detection.expressions.happy > smileBorderLine) {
          if (!(lastOutTime < IDLING_TIME)) {
            isOut = true;
            lastOutTime = IDLING_TIME;
            seEl.play();
          }
        }
        if (isOut) {
          lastOutTime -= DECREMENT_TIME;
        }
        if (lastOutTime <= 0) {
          isOut = false;
          lastOutTime = IDLING_TIME;
        }
      }

      setTimeout(() => detectFaces(), DECREMENT_TIME);
    };

    setTimeout(() => detectFaces(), DECREMENT_TIME);
  });
};

run();
