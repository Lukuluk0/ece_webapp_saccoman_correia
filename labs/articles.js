const express = require('express')
const { endianness } = require('os')
const router = express.Router()
const path = require('path')

let db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      // ...
    ]
  }

router.use((req,res,next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/articles', (req, res, next) => {
    res.write("Voici la liste des articles :\n\n");
    for(const element of db.articles)
    {
        res.write("Id de l'article: ",element.id);
        //res.write("Titre de l'article: ",element.title)
      //res.write("Content: ",element.content);
        //res.write("Date d'achat",element.date);
      //res.write("Voici l'auteur: ",element.author);
    }
       res.end();
})

module.exports = router

