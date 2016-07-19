/**
 * MemoController
 *
 * @description :: Server-side logic for managing memoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index(req, res){
    var q = req.query.q
    Memo
      .find({
        or: [
          {
            title: {
              contains: q,
            },
          },
          {
            note: {
              contains: q,
            },
          },
        ],
      })
      .populate('comments')
      .exec((err, memos) => {
        if(err){
          return res.send(err, 500)
        }
        res.json(memos)
      })
  },
  new(req, res){
    res.view()
  },
  show(req, res){
    var id = req.param('id')
    Memo
      .findOne(id)
      .populate('comments')
      .exec((err, memo) => {
        res.view({memo})
      })
  },
  update(req, res){
    var id = req.params.id
    var memo = req.body
    Memo
      .update(id, memo)
      .exec((err, memo) => {
      if(err){
        return res.send(err, 500)
      }
      Memo.publishUpdate(id, memo, req)
      res.ok()
    })
  }
};
