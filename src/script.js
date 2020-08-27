const terminal = document.getElementsByClassName("root")[0];
const body = document.getElementsByTagName("body")[0];
//let newDiv = document.createElement("p");
//newDiv.setAttribute('class', 'newdiv');
let newLine = document.createElement("p");

//var square = document.createElement('div');
//square.setAttribute('class', 'square');

let counterBool = true;

const skipBtn = document.querySelector(".control span");
terminal.appendChild(newLine);

let str = `The variable raw contains a string with 1,176,893 characters. (We can see that it is a string, using type(raw).) This is the raw content of the book, including many details we are not interested in such as whitespace, line breaks and blank lines. Notice the \r and \n in the opening line of the file, which is how Python displays the special carriage return and line feed characters (the file must have been created on a Windows machine). For our language processing, we want to break up the string into words and punctuation, as we saw in 1.. This step is called tokenization, and it produces our familiar structure, a list of words and punctuation.`

var progressBar = new AsciiProgress("progressbar",{
  length: 22,
  value: 100,
  completeAt: 100,
  showPercent: true,
  percentDecimalPlaces: 2,
  percentLocation: "middle"
});

window.addEventListener("resize", ()=>{
    progressBar.changeLength();
});

sayItSlowly('OB', "Alien", str);

function sayItSlowly(user, place, str){
  let username = `${user}@${place}:~$ `;
  let start = `${username}`
  let arr = `${str}`.split("");
  let counter = 0;
  let isPaused =false;
  newLine.innerHTML=`<font color='white'>${username}</font>`
  //console.log(newDiv.innerHTML.length)
  let interval = setInterval(function(){
    if (!isPaused) {
      printChar(arr[counter],counter);
      counter++;   
    }
   /* if (isPaused){

        printChar(start[counter])
        counter++;
    }*/

    /*if (counter == start.length && isPaused == true){
        counter = 0;
        isPaused = false
    }*/

    if (counter === arr.length) {
      clearInterval(interval);
     /* skipBtn.textContent = "End.";
      skipBtn.classList.remove("hidden");
      skipBtn.addEventListener("click", () => {
        newLine.textContent = ""
        sayItSlowly(user, place, str)
      })*/
    }  

    /*if (terminal.clientHeight > (body.clientHeight)) {
      if(arr[counter] === " "){
        // toggle alway toggling and wont stop, we need to toggle skipBTN outside interval
        isPaused = true;
        skipBtn.classList.remove("hidden");
        
        skipBtn.addEventListener("click", function(){
          newLine.textContent = `${username}`;
          skipBtn.classList.add("hidden");
          isPaused = false;
      })
      }
    }*/
  }, 50)
}


function pause(){
  clearInterval(interval);
}

function printChar(char,counter){

    counter = counter + 49
    if(counter%7==0){
        if(counterBool){
            newLine.innerHTML = newLine.innerHTML.slice(0,counter);
            counterBool=false;
        }else{
            counterBool=true;
        }
    }
    if(counterBool){
        newLine.innerHTML = newLine.innerHTML.slice(0,counter);
        newLine.innerHTML+=char+'<svg width="7" height="13"><rect width="100%" height="100%" style="fill:rgb(255,255,255);" /></svg>';
        //newLine.appendChild(square)
    }else{
        newLine.innerHTML += char;
    }
  
   //newLine.innerHTML += char;


}

