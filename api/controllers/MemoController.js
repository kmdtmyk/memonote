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
  show(req, res){
    var id = req.param('id')
    Memo.findOne(id).exec((err, memo) => {
      res.view({memo})
    })
  },
};
