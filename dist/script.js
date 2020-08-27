const terminal = document.getElementsByClassName("root")[0];
const body = document.getElementsByTagName("body")[0];
let newLine = document.createElement("p");
const skipBtn = document.querySelector(".control span");
terminal.appendChild(newLine);

let str = `
“Jack menembakkan winchester 1873 hasil peninggalan ayah ke langit, 'Mengapa engkau buang peluru secara sia-sia kelangit, bukankah burung Toki tidak bermigrasi di bulan yang sulit ini?' tanyaku.
Ia menjawab 'ayah memberikanku senapan ini dan kugunakan dengan cara ayah juga, jika kau masih menggerutu dan mengerti bagaimana cara menggunakan benda ini dengan benar, kenapa kau tak rebut saja senapan ini ketika ayah pergi kemarin?', aku menggeleng dan memperlihatkan tanganku 'mulai muncul bercak merah ketika aku mencoba menarik pelatuknya diam-diam tanpa sepengetahuanmu malam tadi', aku berbalik dan berkata 'bisakah kau berhenti menembakkan benda itu, dan kita pulang ke rumah sambil memikirkan cara kita sendiri, Jack?'” 
`

sayItSlowly('Emily', "deceasedHope", str);

function sayItSlowly(user, place, str){
  let username = `${user}@${place}:~$`;
  let arr = `${username}${str}`.split("");
  let counter = 0;
  let isPaused = false;

  let interval = setInterval(function(){
    if (!isPaused) {
      printChar(arr[counter]);
      counter++;   
    }

    if (counter === arr.length) {
      clearInterval(interval);
      skipBtn.textContent = "End.";
      skipBtn.classList.remove("hidden");
      skipBtn.addEventListener("click", () => {
        newLine.textContent = ""
        sayItSlowly(user, place, str)
      })
    }

    if (terminal.clientHeight > (body.clientHeight/2)) {
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
    }
  }, 50)
}


function pause(){
  clearInterval(interval);
}

function printChar(char){
  newLine.textContent += char;
}