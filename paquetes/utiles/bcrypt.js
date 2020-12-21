const bcrypt = require('bcrypt');

const password = '1234Segura!';


// Hasheo, 5 veces lo va a rondear
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash); 

    bcrypt.compare(password, hash, function(err, res) {
        if (err) console.log("Error",err)
        if (res) console.log("RTA",res)
    })
});