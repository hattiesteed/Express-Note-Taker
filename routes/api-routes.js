const router = require(`express`).Router();
const fs = require(`fs`);

// get request for api notes page
router.get(`api/notes`, async (req, res) => {
    const dbJSON = await JSON.parse(fs.readFileSync(`./Develop/db/db.json`, `utf8`));
        res.JSON(dbJSON);
});

// post request for api notes page
router.post(`api/notes`, (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync(`./Develop/db/db.json`, `utf8`));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
    };
    dbJSON.push(newNote);
    fs.writeFileSync(`db/db.json`, JSON.stringify(dbJSON));
    res.JSON(dbJSON);
});

module.exports = router;
