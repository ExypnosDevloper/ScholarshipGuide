var Scholarship = require('../models/scholarship');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-t95hm.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, function(err){
    if(err){
        console.log('Not connected to the database');
    }else{
        console.log('Connection Established !!');
    }
});

var scholarship = [
    new Scholarship({
       // imagePath:'/images/Akita.jpg',
        title: 'Scholarship A',
        description: 'This is Scholarship A',
        caste: 'Hindu',
        education:'PG',
        salary: '200000'
    }),
    new Scholarship({
        //imagePath:'/images/Beagle.jpg',
        title: 'Scholarship B',
        description: 'This is Scholarship B',
        caste: 'Maratha',
        education:'UG',
        salary: '100000'
    }),
    new Scholarship({
        //imagePath:'/images/Boxer.jpg',
        title: 'Scholarship C',
        description: 'This is Scholarship C',
        caste: 'Open',
        education:'PG',
        salary: '100000'
    }),
    new Scholarship({
        //imagePath:'/images/Doberman.jpg',
        title: 'Scholarship D',
        description: 'This is Scholarship D',
        caste: 'Hindu',
        education:'UG',
        salary: '50000'
    })




    /* ,
    new Scholarship({
        //imagePath:'/images/Labrador.jpg',
        title: 'Labrador',
        description: 'The Labrador Retriever, or just Labrador, is a large type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United States.',
        salary: '45'
    }),
    new Scholarship({
        //imagePath:'/images/Pug.jpg',
        title: 'Pug',
        description: 'The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.',
        salary: '70'
    })*/




];
var done = 0;
for ( var i = 0; i < scholarship.length; i++) {
    scholarship[i].save(function(err, result){
        if(err){
            console.log(err);
        }

        done++;
        if(done === scholarship.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();

}

