var x = parseInt(prompt("Enter x:"));

function generateTree(x) {
    var Tree = "";

    var firstRow = " ";
    for (var s = 1; s < x; s++) {
        firstRow += " ";
    }
    firstRow += `<span class="gold-top">*</span><br>`;
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
                const randomOrnament = ornaments[Math.floor(Math.random() * ornaments.length)];
                row += randomOrnament;
            }else {
                row += "|";
            }
        }
            row += "*";

        Tree += row + "\n";
    }

    preElement = document.createElement("pre"); 
    preElement.innerText = Tree;

    document.body.appendChild(preElement);
}

generateTree(x);
