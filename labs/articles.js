const express = require('express')
const { endianness } = require('os')
const router = express.Router()
const path = require('path')
const test ="auchan"

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

router.get('/', (req, res, next) => {
    res.write("Voici la liste des articles :\n\n");
    for(const element of db.articles)
    {
        res.write("Id de l'article: " + element.id + "\n");
        res.write("Titre de l'article: " + element.title + "\n")
        res.write("Content: " + element.content + "\n");
        res.write("Date d'achat" + element.date + "\n") ;
        res.write("Voici l'auteur: " + element.author + "\n\n");
    }
       res.end();
});

router.get('/:articleId', (req, res, next) => {
  res.write("Voici l'article correspondant a l'ID " + req.params.articleId + "\n\n");
  const searchId = req.params.articleId;
  const article = db.articles.find( article => article.id === searchId);
  res.write("Titre de l'article: " + article.title + "\n");
  res.write("Content: " + article.content + "\n");
  res.write("Date d'achat" + article.date + "\n") ;
  res.write("Voici l'auteur: " + article.author + "\n\n");
  res.end();
});

router.get('/:articleId/comments', (req, res, next) => {
  res.write("Voici le commentaire correspondant a l'article d'ID " + req.params.articleId + "\n\n");
  const searchId = req.params.articleId;
  const comment = db.comments.find( comment => comment.articleId === searchId);
  res.write("Id du commentaire: " + comment.id + "\n");
  res.write("Heure d'ajout du commentaire: " + comment.timestamp + "\n");
  res.write("Contenu du commentaire: " + comment.content + "\n") ;
  res.write("Auteur du commentaire: " + comment.author + "\n\n");
  res.end();
});

router.get('/:articleId/comments/:commentId', (req, res, next) => {
  res.write("Voici le commentaire d'ID " + req.params.commentId + " correspondant a l'article d'ID " + req.params.articleId + "\n\n");
  const searchaId = req.params.articleId;
  const searchcId = req.params.commentId;
  const comment = db.comments.find( comment => ((comment.articleId === searchaId)&&(comment.id === searchcId)));
  res.write("Id du commentaire: " + comment.id + "\n");
  res.write("Heure d'ajout du commentaire: " + comment.timestamp + "\n");
  res.write("Contenu du commentaire: " + comment.content + "\n") ;
  res.write("Auteur du commentaire: " + comment.author + "\n\n");
  res.end();
});

module.exports = router

