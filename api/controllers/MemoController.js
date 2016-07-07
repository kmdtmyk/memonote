/**
 * MemoController
 *
 * @description :: Server-side logic for managing memoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index(req, res){
    Memo.find().exec((err, memos) => {
      res.view({memos})
    })
  },
  new(req, res){
    res.view()
  },
  show(req, res){
    var id = req.param('id')
    Memo.findOne(id).exec((err, memo) => {
      res.view({memo})
    })
  },
  create(req, res){
    var memo = req.body.memo
    Memo.create(memo, (err, memo) => {
      if(err){
        return res.send(err, 500)
      }
      res.redirect(`/memo/${memo.id}`)
    })
  }
};
