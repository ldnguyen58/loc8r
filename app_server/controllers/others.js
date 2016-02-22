/* GET 'about' page */
module.exports.about = function(rep, res) {
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLoc8r se giup ban tim dia diem lam viec thuan tien co ho tro wifi.'
  });
};
