// Minimal MVP Circom circuit: outputs 1 regardless of inputs.
template Sentiment() {
    signal input score;
    signal input threshold;
    signal output out;

    out <== 1;
}

component main {public [threshold, out]} = Sentiment();

