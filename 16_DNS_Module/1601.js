const dns = require('dns');


const domain = 'example.com';


dns.resolve4(domain, (err, addresses) => {
    if (err) {
        console.error('Error resolving IPv4 addresses:', err);
        return;
    }
    console.log('IPv4 addresses:', addresses);
});


dns.reverse('8.8.8.8', (err, hostnames) => {
    if (err) {
        console.error('Error performing reverse lookup:', err);
        return;
    }
    console.log('Reverse lookup:', hostnames);
});

dns.resolve6(domain, (err, addresses) => {
    if (err) {
        console.error('Error resolving IPv6 addresses:', err);
        return;
    }
    console.log('IPv6 addresses:', addresses);
});

dns.resolveMx(domain, (err, records) => {
    if (err) {
        console.error('Error resolving MX records:', err);
        return;
    }
    console.log('MX records:', records);
});
