/* GET 'about' page */
module.exports.about = function(rep, res) {
  res.render('generic-text', { title: 'About' });
};
