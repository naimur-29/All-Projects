// label function for output
int sign (float n) {
    if(n >= 0) {
        return 1;
    }
    return -1;
}

class Perceptron {
    float[] weights = new float[2];

    // Constructor
    Perceptron() {
        // initialize the weights randomly
        for (int i = 0; i < weights.length; i++) {
            weights[i] = 0;
        }
    }

    // make a guess based on the inputs
    int guess(float[] inputs) {
        float sum = 0;
        for (int i = 0; i < weights.length; i++) {
            sum += inputs[i] * weights[i];
        }

        int output = sign(sum);

        return output;
    }

    // supervised learning
    void train(float[] inputs, int target, float learning_rate) {
        int guess = guess(inputs);
        int error = target - guess;

        // tune the weights
        for (int i = 0; i < weights.length; i++) {
            float delta_weight = error * inputs[i] * learning_rate;
            weights[i] += delta_weight;
        }
    }
}