function one() {
    console.log("One");
}
function two() {
    console.log("Two");
    one();
}
function three() {
    console.log("Three");
    two();

}

one();
two();
three();