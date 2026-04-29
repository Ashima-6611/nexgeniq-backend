const http = require('http');

const data = JSON.stringify({
  name: 'Test',
  email: 'test@example.com',
  phone: '1234567890',
  programPathway: 'AI'
});

const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/api/v1/user/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
