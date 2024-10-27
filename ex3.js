var x = parseInt(prompt("Enter x:"));

function generateTree(x) {
    var Tree = "";

    var firstRow = " ";
    for (var s = 1; s < x; s++) {
        firstRow += " ";
    }
    firstRow += "*\n";
    Tree += firstRow;

    for (var i = 1; i <= x; i++) {
        var row = "";
        for (var j = 1; j <= x - i; j++) {
            row += " ";
        }

        for (var k = 1; k <= 2 * i - 1; k++) {
            if (k == 1) {
                row += "*";
            }
            if (Math.random() < 0.09) {
                const ornaments = ["o", "#"];
                const randomOrnament =
                    ornaments[Math.floor(Math.random() * ornaments.length)];
                row += randomOrnament;
            } else {
                row += "|";
            }
        }
        row += "*";

        Tree += row + "\n";
    }
    var stemWidth = Math.floor(x / 3);
    var stemHeight = Math.floor(x / 3);
    var stemPadding = Math.floor((2 * x - 1 - stemWidth) / 2);

    for (var i = 0; i < stemHeight; i++) {
        var stemRow = "";

        for (var j = 0; j < stemPadding; j++) {
            stemRow += " ";
        }

        for (var k = 0; k < stemWidth; k++) {
            stemRow += "|";
        }

        Tree += stemRow + "\n";
    }

    var preElement = document.createElement("pre");
    preElement.innerText = Tree;

    document.body.appendChild(preElement);
}

generateTree(x);
