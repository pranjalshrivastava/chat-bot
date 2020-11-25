const express = require("express");
const { pool } = require("./dbConfig");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const app = express();
var path = require('path')
app.use(express.static(path.join(__dirname, 'static')));

const PORT = process.env.PORT || 3000;

const initializePassport = require("./passportConfig");

initializePassport(passport);

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.render("login.ejs");
});

app.get("/users/register", checkAuthenticated, (req, res) => {
    res.render("consent.ejs");
});

app.get("/users/login", checkAuthenticated, (req, res) => {
    // console.log(req.session.flash.error);
    res.render("login.ejs");
});

app.get("/panas", checkNotAuthenticated, (req, res) => {
    res.render("panas", { user: req.user.name });
});

app.get("/cwb", checkNotAuthenticated, (req, res) => {
    res.render("cwb", { user: req.user.name });
});

app.get("/postcwb", checkNotAuthenticated, (req, res) => {
    res.render("postcwb", { user: req.user.name });
});

app.get("/ces", checkNotAuthenticated, (req, res) => {
    res.render("ces", { user: req.user.name });
});

app.get("/pss", checkNotAuthenticated, (req, res) => {
    res.render("pss", { user: req.user.name });
});

app.get("/msq", checkNotAuthenticated, (req, res) => {
    res.render("msq", { user: req.user.name });
});

app.get("/gses", checkNotAuthenticated, (req, res) => {
    res.render("gses", { user: req.user.name });
});

app.get("/postgses", checkNotAuthenticated, (req, res) => {
    res.render("postgses", { user: req.user.name });
});


app.post("/panas-score", (req, res) => {
    var panasScore = req.body.score;
    let queryText = `INSERT INTO scores (name, uid, panas_score) VALUES ($1, $2, $3)`
    pool.query(queryText, [req.user.name, req.user.uid, panasScore], (err, res) => {
        console.log(err, res)
    });
});

app.post("/cwb-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO cwb VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10], (err, res) => {
        console.log(err, res)
    });
});

app.post("/postcwb-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO post_cwb VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10], (err, res) => {
        console.log(err, res)
    });
});

app.post("/gses-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO gses VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10], (err, res) => {
        console.log(err, res)
    });
});

app.post("/postgses-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO post_gses VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10], (err, res) => {
        console.log(err, res)
    });
});


app.post("/pss-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO pss VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10], (err, res) => {
        console.log(err, res)
    });
});

app.post("/ces-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO ces VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12,$13,$14, $15, $16,$17, $18, $19,$20,$21,$22)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10,req.body.val_11,req.body.val_12,req.body.val_13,req.body.val_14,req.body.val_15,req.body.val_16,req.body.val_17,req.body.val_18,req.body.val_19,req.body.val_20], (err, res) => {
        console.log(err, res)
    });
});

app.post("/msq-score", (req, res) => {
    //var panasScore = req.body.score;
    let queryText = `INSERT INTO msq VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9,$10,$11,$12,$13,$14, $15, $16,$17, $18, $19,$20,$21,$22)`
    pool.query(queryText, [req.user.uid,req.user.name, req.body.val_1,req.body.val_2,req.body.val_3,req.body.val_4,req.body.val_5,req.body.val_6,req.body.val_7,req.body.val_8,req.body.val_9,req.body.val_10,req.body.val_11,req.body.val_12,req.body.val_13,req.body.val_14,req.body.val_15,req.body.val_16,req.body.val_17,req.body.val_18,req.body.val_19,req.body.val_20], (err, res) => {
        console.log(err, res)
    });
});

app.get("/chatbot", checkNotAuthenticated, (req, res) => {
    res.render('chatbot.ejs', { user: req.user.name });
});

app.get("/users/logout", (req, res) => {
    req.logout();
    res.render("login.ejs", { message: "You have logged out successfully" });
});

app.post("/users/register", (req, res) => {
    var { name, uid, pwd } = req.body;

    let errors = [];

    if (!name || !uid || !pwd) {
        errors.push({ message: "Please enter all fields" });
    }

//     if (uid && uid.length == 8) {
//         for (var i = 0; i < uid.length; i++) {
//             if (uid.charCodeAt(i) >= 48 && uid.charCodeAt(i) <= 57) {
//                 isUidValid = true
//             } else {
//                 isUidValid = false;
//             }
//         }
//     } else {
//         isUidValid = false;
//     }

//     if (!isUidValid) {
//         errors.push({ message: "Enter a valid U-number" });
//     }

    if (errors.length > 0) {
        res.render("consent.ejs", { errors, name, uid, pwd });
    } else {
        let queryText = `SELECT * FROM users WHERE uid = $1`
        pool.query(queryText, [uid], (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log(results.rows);

            if (results.rows.length > 0) {
                errors.push({ message: "username alredy exists, please use a different username" });
                return res.render("consent.ejs", { errors, name, uid, pwd });
            } else {
                let queryText = `INSERT INTO users (name, uid, pwd, times_logged) VALUES ($1, $2, $3, 0) RETURNING uid`
                pool.query(queryText, [name, uid, pwd], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log(results.rows);
                    req.flash("success_msg", "You are now registered. Please log in");
                    res.redirect("/users/login");
                });
            }
        });
    }
});

app.post(
    "/users/login",
    passport.authenticate("local", {
        successRedirect: "/panas",
        failureRedirect: "/users/login",
        failureFlash: true
    })
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/panas");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/users/login");
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
