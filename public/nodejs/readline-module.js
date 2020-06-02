const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!\n`);
    readline.close(); // fermeture une fois la question posée
});

readline.on("close", () => {
    console.log("Fermerture de l'appli...");
});
