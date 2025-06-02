// JavaScript Document
function bugua() {
    const tips = [
        "--- | - -",
        "--- | ---",
        "--- | ---",
        "--- | ---",
        "- - | - -",
        "- - | - -",
        "- - | - -",
        "- - | ---"
    ];

    const index = Math.floor(Math.random() * tips.length);
    document.write(`<font face='Consolas'><font size=5>${tips[index]}</font><br></font>`);
}

for (let i = 0; i < 3; i++) {
    bugua();
}

document.write("<p>");

for (let i = 0; i < 3; i++) {
    bugua();
}

document.write("<p>");

const now = new Date();
document.write(`卜卦時間：${now.toLocaleString()}`);

