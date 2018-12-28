console.log('Starting App');

setTimeout(() => {
  /*Asynchronous call back*/
  console.log('Inside of callback function');
}, 2000);

setTimeout(() => {
  console.log('Inside callback-2');
}, 0)
console.log('Finishing Up');
