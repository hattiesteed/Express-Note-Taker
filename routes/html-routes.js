// required modules
const router = require(`express`).router();
const path = require(`path`);

// route for index.html
router.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../develop/public/assets/index.html`));
});

// route for notes.html
router.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `../develop/public/assets/notes.html`));
});

module.exports = router;
