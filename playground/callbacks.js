var getUser = (id, callback) => {
    var user = {
      id: id,
      name: 'Aditya'
    };
    setTimeout( () => {
        callback(user); /* Create a callback function using synchronous programming */
    }, 3000 );
    
};

getUser(31, (userObject) => {
  console.log(userObject);
});
