const { userschema } = require("../models/user");
const express = require("express");
const router = express.Router();
const { name } = require("ejs");


router.get('/', (req, res) => {
    res.render("register");
});
   
router.get('/quiz' , (req, res) => {
   res.render("exam");
});



router.get('/admin', async (req, res) => {
  const data = await userschema.find();
  res.render( "admin",{ data } );
})

router.post("/register", async (req, res) => {

  const user = new userschema({
    name: req.body.name,
    phone: req.body.phone,
    parentphone: req.body.parentphone,
    institute: req.body.institute,
    grade: req.body.grade,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
    });
    const new_user = await user.save()
    req.session.userid = new_user._id;
    res.redirect('/quiz');
    
});


router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userschema.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.redirect("/quiz");
    } else {
      res.status(400).send("password is wrong! ");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;