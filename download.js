console.log("Скачивание файлов...");
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
const file = fs.createWriteStream("file.jpg");
const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
   response.pipe(file);
   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Готово");
   });
});