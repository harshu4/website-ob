console.log("called")
function dowloader(url,type){
     return new Promise((resolutionFunc, rejectionFunc) => {
            var progressBar = new AsciiProgress("progressbar",{
            length: (90*window.innerWidth)/1453,
            value: 0,
            completeAt: 100,
            showPercent: true,
            percentDecimalPlaces: 2,
            percentLocation: "middle"
            });
            request = new XMLHttpRequest();
            request.responseType = 'blob';
            request.open('get', url, true);
            request.send();
            request.onprogress = function(e) {
            let progressmax = e.total;
            let progressvalue = e.loaded;
                
            var percent_complete = (e.loaded / e.total) * 100;
            percent_complete = Math.floor(percent_complete);
            progressBar.setValue(percent_complete)
            
            
             };
            request.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200){
                    console.log("DOne")
                    resolutionFunc('Done');
                };
            }
            })
            
            
          
       
}


dowloader("https://8008-e709fba4-d274-455b-bd1e-2c75fe336c9a.ws-us02.gitpod.io/ascii-progress.js",'sfd')