// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();


( function aurcode() {
    console.log(`DB CONNECTED TWO`);
}) ();



( () => {
    // unknown IIFE
    console.log(`DB CONNECTED THREE`);
}) ();


( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
}) ("Amit");
// chai()

