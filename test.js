const greet = require('./index');

if (greet('World') === 'Hello, World!') {
  console.log('✅ Test passed!');
  process.exit(0);
} else {
  console.error('❌ Test failed!');
  process.exit(1);
}
