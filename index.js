const { exec } = require('child_process');
const script = (filename) => exec(`sh ${filename}`,
        (error, stdout, stderr) => {
            if (stdout) {
                const result = JSON.parse(stdout);
                if (result && result.data && result.data.length > 0) {
                    exec('sh message.sh');
                }
            }
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

setInterval(() => {
    script(`basketball.sh`);
    script(`cricket.sh`);
    script(`football.sh`);
}, 30000)
