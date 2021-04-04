const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');