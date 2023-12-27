var express = require('express');
var router = express.Router();
var POST = [
  {
    dp:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    name:'Kumari',
    title:'@ku',
    subtittle:'#papa ki pari',
    main:"https://images.pexels.com/photos/6939095/pexels-photo-6939095.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    like:0
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});
router.get('/read', function(req, res, next) {
  res.render('read', { title: 'Express', cool:POST, });
});
router.post('/create', function(req, res, next) {
  const abc = {...req.body, date: new Date(), like:0}
  POST.push(abc);
  res.redirect('/read')
  // res.render('index', { title: 'Express' });
});
router.get('/delete/:index', function(req, res, next) {
      POST.splice(req.params.index, 1) 
    res.redirect('/read')
    });
router.get("/update/:index", function(req, res, next){
  let num= POST[req.params.index];
  res.render('update', {entry:num,index:req.params.index})
});
router.post('/update/:index', function (req, res, next){  
  POST[req.params.index] ={...req.body, date: new Date(), like:0}
res.redirect('/read')
});
router.get('/like/:index', function(req, res, next) {
        let rup = POST[req.params.index];
                rup.like += 1;
          POST[req.params.index] = rup;
  res.redirect('/read')
});


module.exports = router;
