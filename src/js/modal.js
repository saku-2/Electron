const path = require('path');

function speak(){
    var speak   = new SpeechSynthesisUtterance();
    speak.text  = document.querySelector('.text').value;
    speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    speak.pitch = 0;　// 声の高さ 0-2 初期値:1(0で女性の声) 
    speak.lang  = 'ja-JP'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

    speechSynthesis.speak(speak);

}

function fileOpen(){
    // document.location.href = '../file/serverStartup.pdf'

    // function openPDF(filePath){ let pdfWindow = new electron.remote.BrowserWindow(
    //     { icon: '../file/serverStartup.pdf', 
    //     width: 1200, height: 800, webPreferences: { plugins: true } }); 
    //     pdfWindow.loadURL(url.format({ pathname: filePath, protocol: 'file:', slashes: true })); 
    //     pdfWindow.setMenu(null); pdfWindow.on('closed', function () { pdfWindow = null }); } 

    // var pdfview = require('../../node_modules/electron-pdf-viewer');
    // //set pdf path
    // var pdfurl ='https://www.canon.com.cn/products/printer/pixma-fax/images/speedtest.pdf';  
    // // you can get full URL to display PDF by using getPdfHtmlURL() function
    // const displayPdfUrl = pdfview.getPdfHtmlURL(pdfurl);
    // const options = {
    // width: 800,
    // height: 600,
    // webPreferences: {
    //     nodeIntegration: false,
    // contextIsolation: true
    // }
    // }
    // // If you dont provive options, default options will be use
    // var win = pdfview.showpdf(pdfurl, options);
    // win.show();


    //指定したファイルを読み込む
    // var path = '../file/serverStartup.pdf';
    // var path = '../file/test.txt';
    // function readFile(path) {
    //     fs.readFile(path, (error, data) => {
    //         if (error != null) {
    //             alert("file open error.");
    //             return;
    //         }
    //         preview.textContent = data.toString();
    //     })
    // }
    // readFile(path);

    //【Webページを開く】
    // window.location.href = 'https://qiita.com'

    //【PDFを開く】
    // window.location.href = './file/serverStartup.pdf'

    //【テキストを出力】
    //const str = 'こんにちは、今日は良い天気ですね！';
    // const str = document.getElementById('sample_text');
    // const blob = new Blob([str], {type: 'text/plain'});

    // const reader = new FileReader();
    
    // reader.onload = function(){
    //     console.log(reader.result); 
    // };
    // document.getElementById('sample_text').onchange(function(){
    //     preview.value = document.getElementById('sample_text')
    // })

    // var str = reader.result;
    //【txtarea　に表示する】
    // preview.value = 'わー';   
    // reader.readAsText(blob);

    //【PDFを開く（動作していない）】
    //「require」の解決が必要（Electoronのメインプロセス・レンダラープロセスの理解が必要
    //エラー「requier is not difined」
    // var pdfview = require('../../node_modules/electron-pdf-viewer');

    // //set pdf path
    // // var pdfurl ='https://www.canon.com.cn/products/printer/pixma-fax/images/speedtest.pdf';
    // var pdfurl ='../file/serverStartup.pdf';  
    // // you can get full URL to display PDF by using getPdfHtmlURL() function
    // const displayPdfUrl = pdfview.getPdfHtmlURL(pdfurl);
    // const options = {
    // width: 800,
    // height: 600,
    // webPreferences: {
    //     nodeIntegration: false,
    // contextIsolation: true
    // }
    // }
    // // If you dont provive options, default options will be use
    // var win = pdfview.showpdf(pdfurl, options);
    // win.show();
}




