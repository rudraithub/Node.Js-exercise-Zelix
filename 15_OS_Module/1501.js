const os = require('os');



console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('Release:', os.release());
console.log('Type:', os.type());
console.log('Uptime (seconds):', os.uptime());
console.log('User Info:', os.userInfo());
