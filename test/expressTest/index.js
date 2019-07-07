var session = require('express-session');
app.use(session({
  secret: 'orders',  //加密
  key: 'ordersdb', //cookie nam
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());
// set flash
app.use(function (req, res, next) {
  res.locals.errors = req.flash('error');
  res.locals.infos = req.flash('info');
  next();
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: '欢迎登录' });
  });
  router.post('/login', function(req, res, next) {
    User.get(req.body.username,function(err,user){
        if(!user || user.name === ''){
          req.flash('error','用户不存在');
          return res.redirect('login');
        }
        if(req.body.password != user.password){
          req.flash('error','密码不对');
          return res.redirect('login');
        }
        req.flash('info','登录成功');
        res.redirect('login');
    })
  });