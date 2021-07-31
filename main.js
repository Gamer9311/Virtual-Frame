function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 160, 120, 320, 240);

    fill(0, 120, 0);
    stroke(0, 0, 200);
    rect(90, 40, 460, 20);

    fill(0, 120, 0);
    stroke(0, 0, 200);
    rect(70, 70, 20, 460);

    fill(0, 120, 0);
    stroke(0, 0, 200);
    rect(90, 440, 460, 20);

    fill(0, 120, 0);
    stroke(0, 0, 200);
    rect(570, 70, 20, 460);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(70, 50, 100);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(570, 50, 100);

    fill(255, 0, 0)
    stroke(0, 128, 0);
    circle(570, 450, 100);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(70, 450, 100);
}
