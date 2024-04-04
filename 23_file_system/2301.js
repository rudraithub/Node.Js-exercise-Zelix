const fs = require('fs');

const fileName = 'data.txt';


fs.unlink(fileName, (err) => {
    if (err && err.code !== 'ENOENT') { 
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully.');

    
    fs.writeFile(fileName, 'Hello, World!', (err) => {
        if (err) {
            console.error('Error creating file:', err);
            return;
        }
        console.log('File created successfully.');

       
        fs.appendFile(fileName, ' New data appended.', (err) => {
            if (err) {
                console.error('Error updating file:', err);
                return;
            }
            console.log('File updated successfully.');

           
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }
                console.log('File content:', data);
            });
        });
    });
});

