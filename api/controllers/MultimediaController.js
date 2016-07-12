/**
 * MultimediaController
 *
 * @description :: Server-side logic for managing multimedias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  upload(req, res){
    req.file('file').upload({
      maxBytes: 10000000
    }, (err, uploadedFiles) => {
      if(err){
        return res.serverError(err)
      }
      var fd = uploadedFiles[0].fd
      var name = fd.split('/').pop()
      var url = req.baseUrl + '/multimedia/' + name
      return res.json({
        files: uploadedFiles,
        url: url,
      })
    })
  },
  show(req, res){
    var name = req.params.name
    var SkipperDisk = require('skipper-disk')
    var fileAdapter = SkipperDisk()
    fileAdapter.read('/vagrant/memonote/.tmp/uploads/' + name)
      .on('error', (err) => {
        return res.serverError(err)
      })
      .pipe(res)
  },
};
