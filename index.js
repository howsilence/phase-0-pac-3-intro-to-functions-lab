function shout(argument) {
return argument.toUpperCase();
};
function whisper(argument) {
    return argument.toLowerCase();
};
function logShout(argument) {
    console.log(argument.toUpperCase());
};
function logWhisper(argument) {
    console.log(argument.toLowerCase());
};
function sayHiToGrandma(argument) {
    if (argument === "I love you, Grandma.") {
        console.log("I love you, too.");
        return "I love you, too."
    };
    if (argument === argument.toUpperCase()) {
        console.log("YES INDEED!");
        return "YES INDEED!"
    };
    if (argument === argument.toLowerCase()) {
        console.log("I can't hear you!")
        return "I can't hear you!"
    };
}