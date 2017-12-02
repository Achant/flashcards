const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data; // is the same as // const cards = data.cards // ES6 syntax

router.get('/:id', (req, res) => {
  // console.log('req',req)
  // console.log('res',res)
  // console.log("cards", cards)
  // console.log("hint", hint)
  // res.send("test send")
  const { side } = req.query; //querystring
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { text };

  if ( side === "question") {
    templateData.hint = hint;
    templateData.side = side;
  }


  res.render('card', templateData);

  /*{
    prompt: data.cards[req.params.id].question,
    hint: data.cards[req.params.id].hint
  });*/
});

module.exports = router;
