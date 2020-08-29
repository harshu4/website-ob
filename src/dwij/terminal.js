const terminal = document.getElementsByClassName("root")[0];
//const body = document.getElementsByTagName("body")[0];
const commands = [{ type: "command", str: "Its first test with wonderful terminal by OB." }, { type: "command", str: "Its second test with wonderful terminal by OB." }]


class PrintCommander {
    constructor(str) {
        this.newLine = document.createElement("p");
        this.counterBool = true;
        this.str = str;
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




}

window.addEventListener("resize", ()=>{
    let ob_logo=document.getElementById("our_logo");
    ob_logo.style.fontSize=(14*window.innerWidth)/1453;
     ob_logo.style.color="white";
   
});

(async function () {
    let ob_logo=document.getElementById("our_logo");
    ob_logo.style.fontSize=(14*window.innerWidth)/1453;
     ob_logo.style.color="white";
    
    for (cmd of commands) {
        if (cmd["type"] == "command") {
            let str = cmd["str"]
            let pc = new PrintCommander(str)
            terminal.appendChild(pc.newLine);
            await pc.sayItSlowly()
        } else if (cmd["type"] == "text") {
            let str = cmd["str"]
        } else if (cmd["type"] == "download") {
            let str = cmd["link"]
        }
    }
})()













