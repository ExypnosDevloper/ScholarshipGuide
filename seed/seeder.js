var Days = require('../models/days');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-uqz8o.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, function(err){
    if(err){
        console.log('Not connected to the database');
    }else{
        console.log('Connection Established !!');
    }
});


var day = [
	new Days({
		mon:{
			'8:45-9:45':'spcc',
			'9:45-10:45':'ml'
		}
	})];

var done = 0;
for ( var i = 0; i < day.length; i++) {
    day[i].save(function(err, result){
        if(err){
            console.log(err);
        }

        done++;
        if(done === day.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();

}
