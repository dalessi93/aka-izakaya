const express = require('express');
const Users = require('../../models/user');
const bcrypt = require('bcrypt');

const router = express.Router();

// Routes
// 1. Create session (login)
router.post('/create', (req, res) => {
    //     const username = req.body.username;
    //     const password = req.body.password;
    //     function incorrectResponse(res) {
    //         res.status(400).json({
    //             message: 'Incorrect username or password',
    //         });
    //     }
    //     Users.getByUsername(username)
    //         .then((user) => {
    //             // Note that the asynchronous method is preferred but we use Sync here for simplicity
    //             const valid = user && bcrypt.compareSync(password, user.password);
    //             if (valid) {
    req.session.userId = 'Stephan';
    req.session.username = 'Stephan';
    res.json({
        message: 'The session worked',
        userId: req.session.userId,
        username: req.session.username,
    }); // send the session info (but only as much as is relevant/necessary);
    res.redirect('/');
});
//             } else {
//                 incorrectResponse(res);
//             }
//         })
//         .catch((error) => {
//             incorrectResponse(res);
//         });
// });
// 2. Get Session
router.get('/', (req, res) => {
    // If Logged in Check
    if (req.session.username) {
        res.json({
            userId: req.session.userId,
            username: req.session.username,
        });
    } else {
        // 401 - Unauthorized
        res.status(401).json({
            message: 'Not logged in',
        });
    }
});
// 3. Delete session (logout)
router.delete('/', (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logged out' });
});

module.exports = router;
