const brightnessMap = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let video;

function setup() {
  noCanvas();
  video = createVideo("./assets/sao-op01.mp4");

  function draw() {
    background(0);

    video.loadPixels();
    for (let i = 0; i < video.width; i++) {
      let row = "";
      for (let j = 0; j < video.height; j++) {
        const pixelIndex = (i + j * video.width) * 4;
        const r = video.pixels[pixelIndex + 0];
        const g = video.pixels[pixelIndex + 1];
        const b = video.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;

        const len = brightnessMap.length;
        const charIndex = floor(map(avg, 0, 255, len, 0));

        const c = brightnessMap.charAt(charIndex);
        if (c === " ") {
          row += "&nbsp";
        } else {
          row += c;
        }
      }
      createDiv(row);
    }
  }
}
