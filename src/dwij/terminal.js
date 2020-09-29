const terminal = document.getElementsByClassName("root")[0];
//const body = document.getElementsByTagName("body")[0];
const commands = [{ type: "command", str: "Its first test with wonderful terminal by OB." }, { type: "command", str: "Its second test with wonderful terminal by OB." }, { type: "link", link: "https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js", name: "three.js" }, { type: "link", link: "https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js", name: "three.js" }, { type: "link", link: "https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js", name: "three.js" }, { type: "link", link: "https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js", name: "three.js" }, { type: "link", link: "https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js", name: "three.js" }]
let progresslist = []

class PrintCommander {
    constructor(str) {
        this.newLine = document.createElement("p");
        this.counterBool = true;
        this.str = str;
        console.log(str)
    }

    printChar(char, counter) {

        counter = counter + 54
        if (counter % 7 == 0) {
            if (this.counterBool) {
                this.newLine.innerHTML = this.newLine.innerHTML.slice(0, counter);
                this.counterBool = false;
            } else {
                this.counterBool = true;
            }
        }
        if (this.counterBool) {
            this.newLine.innerHTML = this.newLine.innerHTML.slice(0, counter);
            this.newLine.innerHTML += char + '<svg width="7" height="13"><rect width="100%" height="100%" style="fill:rgb(255,255,255);" /></svg>';
        } else {
            this.newLine.innerHTML += char;
        }
    }

    sayItSlowly() {
        return new Promise((resolutionFunc, rejectionFunc) => {
            let username = `Guest@OverclockedBrains:~$ `;
            let arr = `${this.str}`.split("");
            let counter = 0;

            this.newLine.innerHTML = `<font color='white'>${username}</font>`
            let interval = setInterval(() => {
                this.printChar(arr[counter], counter);
                counter++;

                if (counter === arr.length) {
                    clearInterval(interval);
                    resolutionFunc();
                }
            }, 50)
        })
    }

    sayItLineByLine(bonusString) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            let arr = `${bonusString}`.split("\n");
            let counter = 0;
            this.newLine.innerHTML += '<br>'
            let interval = setInterval(() => {
                this.newLine.innerHTML += (arr[counter] + "<br>")
                counter++;
                if (counter === arr.length) {
                    clearInterval(interval);
                    resolutionFunc();
                }
            }, 400)
        })
    }

}

window.addEventListener("resize", () => {
    let ob_logo = document.getElementById("our_logo");
    ob_logo.style.fontSize = (14 * window.innerWidth) / 1453;
    ob_logo.style.color = "white";
    progresslist.forEach((name) => {
        name.changeLength()

    })

});


(async function () {
    let ob_logo = document.getElementById("our_logo");
    ob_logo.style.fontSize = (14 * window.innerWidth) / 1453;
    ob_logo.style.color = "white";

    for (cmd of commands) {
        if (cmd["type"] == "command") {
            let str = cmd["str"]
            let pc = new PrintCommander(str)
            terminal.appendChild(pc.newLine);
            await pc.sayItSlowly()
        } else if (cmd["type"] == "text") {
            let str = cmd["str"]
        } else if (cmd["type"] == "link") {
            let url = cmd["link"]
            let name = cmd['name']
            let pc = new PrintCommander(`wget ${url}`)
            terminal.appendChild(pc.newLine);
            await pc.sayItSlowly()
            await pc.sayItLineByLine(`HTTP request sent, awaiting response...\nLocation: ${url}\nHTTP request sent, awaiting response... 200 OK\nLength: unspecified [text/html]\nSaving to: ${name}`)
            a = document.createElement("p");
            terminal.appendChild(a)
            progress = new AsciiProgress(a, {
                length: (90 * window.innerWidth) / 1453,
                value: 0,
                completeAt: 100,
                showPercent: true,
                url: url,
                percentDecimalPlaces: 2,
                percentLocation: "middle",
                filename: name,
            });
            progresslist.push(progress)
            downloader(url, progress)

        }
    }
})()













