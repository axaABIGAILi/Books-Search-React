/* SEEDS FOR DB */
const mongoose = require('mongoose');
const db = require('../../models');

// connection to mongodb via mongoose
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/books-search-react');

const bookSeed = [
    {
        authors: ['Agatha Christie'],
        description: `Considered one of the greatest mysteries of all time, Christie's masterpiece of murder and suspense is available in this newly packaged paperback. Ten strangers, each with a dark secret, are gathered together on an isolated island by a mysterious host. One by one, they die--and before the weekend is out, there will be none.`,
        image: 'https://books.google.com/books/content?id=ACMYLqk_7GoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'https://books.google.com/books?id=ACMYLqk_7GoC&dq=and+then+there+were+none&hl=&source=gbs_api',
        title: 'And Then There Were None'

    },
    {
        authors: ['Dr. Seuss'],
        description: 'This Dr. Seuss classic starring Sam-I-Am will have readers of all ages craving Green Eggs and Ham! And don’t miss the new series adaption of Green Eggs and Ham coming soon to Netflix – featuring the voice talents of Michael Douglas, Diane Keaton, Daveed Diggs, and more! “Do you like green eggs and ham?” asks Sam-I-am in this Beginner Book by Dr. Seuss. In a house or with a mouse? In a boat or with a goat? On a train or in a tree? Sam keeps asking persistently. With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic. In this most famous of cumulative tales, the list of places to enjoy green eggs and ham, and friends to enjoy them with, gets longer and longer. Follow Sam-I-am as he insists that this unusual treat is indeed a delectable snack to be savored everywhere and in every way. Originally created by Dr. Seuss, Beginner Books encourage children to read all by themselves, with simple words and illustrations that give clues to their meaning.',
        image: 'https://books.google.com/books/content?id=ZK7xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        title: 'Green Eggs and Ham'
    }
];

db.Books
    .remove({})
    .then(()=> db.Books.collection.insertMany(bookSeed))
    .then(data=>{
        console.log(`${data.result.n} records inserted!`);
    })
    .catch(err=>{
        console.error(err);
        process.exit(1);
    });