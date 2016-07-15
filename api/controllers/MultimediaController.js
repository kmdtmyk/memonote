/**
 * MultimediaController
 *
 * @description :: Server-side logic for managing multimedias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  upload(req, res){
    // console.log(res)
    req.file('file').upload({
      maxBytes: 10000000
    }, (err, files) => {
      if(err){
        return res.serverError(err)
      }
      files = files.map((file) => {
        var fd = file.fd
        var name = fd.split('/').pop()
        file.url = req.baseUrl + '/multimedia/' + name
        return file
      })
      return res.json({files})
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
