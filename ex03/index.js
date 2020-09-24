const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
         readStream.on('data', (chunk) => {
             reqData.push(chunk)
             size += chunk.length
         });

         readStream.on('end', (chunk) => {
             let result = Buffer.concat(reqData, size).toString();
             resolve(JSON.parse(result));
         });

         readStream.on('error', (err) => {
            console.log('error', err); // annie-log
         })
    })
}
