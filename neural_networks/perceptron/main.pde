Perceptron perceptron;
Point[] points = new Point[100];
Point[] tests = new Point[1000];
int frameCount, trainingIndex, score = 0;
float[] inps = new float[2];

void setup() {
    size(800, 800);

    // second display:
    String[] args = {"The Perceptron Process"};
    SecondApplet sa = new SecondApplet();
    PApplet.runSketch(args, sa);

    frameCount = 0;
    trainingIndex = 0;
    perceptron = new Perceptron();

    for (int i = 0; i < points.length; i++) {
        points[i] = new Point();
    }

    for (int i = 0; i < tests.length; i++) {
        tests[i] = new Point();
    }

    println(points[0].x, tests[0].x);
}

void draw() {
    background(255);
    frameCount++;

    // diagonal line separating two regions
    stroke(0, 100);
    strokeWeight(5);
    line(0, 0, width, height);
    strokeWeight(1);

    if (score >= (points.length * 1)) {
        println("training complete!");
        score = 0;
        for (Point pt : tests) {
            pt.show();
        }

        for (Point pt: tests) {
            int target = pt.label;
            float[] inputs = {pt.x, pt.y};
            int guess = perceptron.guess(inputs);            


            if (guess == target) {
                fill(0, 255, 0);
                score++;
            } else {
                fill(255, 0, 0);
            }
            noStroke();
            ellipse(pt.x, pt.y, 6, 6);
        }
    noLoop();
    } else {
        score = 0;

        // show points
        for (Point pt : points) {
            pt.show();
        }

        Point current = points[0];

        // train the perceptron
        for (Point pt: points) {
            int target = pt.label;
            float[] inputs = {pt.x, pt.y};
            int guess = perceptron.guess(inputs);            


            if (guess == target) {
                fill(0, 255, 0);
                score++;
            } else {
                current = pt;
                fill(255, 0, 0);
            }
            noStroke();
            ellipse(pt.x, pt.y, 6, 6);
        }

        fill(255, 255, 0, 150);
        noStroke();
        ellipse(current.x, current.y, 32, 32);

        if (frameCount % 10 == 0) {
            // training over one by one points at a time:
            println("training...");

            int target = current.label;
            inps[0] = current.x;
            inps[1] = current.y;
            perceptron.train(inps, target, 0.01);

            trainingIndex++;
            if (trainingIndex >= points.length) {
                trainingIndex = 0;
            }    
        }
    }
}

public class SecondApplet extends PApplet {

    public void settings() {
        size(800, 800);
    }

    public void draw() {
        background(51);

        fill(255);
        stroke(255, 100);
        strokeWeight(10);
        // inputs
        line(100, height/4, width/2, height/2);
        line(100, (height/4) * 3, width/2, height/2);

        ellipse(100, height/4, 100, 100);
        ellipse(100, (height/4) * 3, 100, 100);
        // perceptron
        ellipse(width/2, height/2, 100, 100);
        // output
        line(width/2, height/2, width - 100, height/2);
        ellipse(width - 100, height/2, 100, 100);

        // labels
        fill(51);
        textSize(16);
        text(inps[0], 100 - 30, height/4 + 4);
        text(inps[1], 100 - 30, (height/4) * 3 + 4);

        text(perceptron.weights[0], width/2 - 27, height/2 - 6);
        text(perceptron.weights[1], width/2 - 29, height/2 + 14);

        text(perceptron.guess(inps), width - 100 - 4, height/2 + 4);
    }
}