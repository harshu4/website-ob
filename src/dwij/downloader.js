console.log("called")
function dowloader(url, type) {
    return new Promise((resolutionFunc, rejectionFunc) => {
        var progressBar = new AsciiProgress("progressbar", {
            length: (90 * window.innerWidth) / 1453,
            value: 0,
            completeAt: 100,
            showPercent: true,
            percentDecimalPlaces: 2,
            percentLocation: "middle"
        });
        request = new XMLHttpRequest();
        request.responseType = 'text';
        request.open('get', url, true);
        request.send();
        request.onprogress = function (e) {
            let progressmax;
            if (e.lengthComputable) {
                progressmax = e.total;
            } else {
                console.log(e.target.getResponseHeader('x-decompressed-content-length'))
                progressmax = parseInt(e.target.getResponseHeader('x-decompressed-content-length'), 10);
            }
            console.log(progressmax)
            let progressvalue = e.loaded;
            var percent_complete = (e.loaded / progressmax) * 100;
            percent_complete = Math.floor(percent_complete);
            progressBar.setValue(percent_complete)
        };
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("DOne")
                injectScript(request.responseText)
                    .then(() => {
                        console.log('Script loaded!');
                    }).catch(error => {
                        console.error(error);
                    });
                resolutionFunc('Done');

            };
        }
    })




}


function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.text = src
        document.head.appendChild(script);
        resolve()

    });
}



//dowloader("https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js", 'sfd')