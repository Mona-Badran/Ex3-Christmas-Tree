function generateTree(rows) {
    var Tree = "";

    for (var i = 1; i <= rows; i++) {
        var row = "";
        for (var j = 1; j <= rows - i; j++) {
            row += " ";
        }

        for (var k = 1; k <= 2 * i - 1; k++) {
            if (k == 1 || k == 2 * i - 1) {
                row += "*";
            } else {
                row += "|";
            }
        }

        Tree += row + "\n";
    }

    preElement = document.createElement("pre"); 
    preElement.innerText = Tree;

    document.body.appendChild(preElement);
}

generateTree(10);
