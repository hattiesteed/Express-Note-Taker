const router = require(`express`).router();
const fs = require(`fs`);

// get request for api
router.get(`api/notes`, async (req, res) => {
    const dbJSON = await JSON.parse(fs.readFileSync(`../develop/db/db.json`, `utf-8`));
        res.JSON(dbJSON);
});

router.post(`api/notes`, (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync(`../develop/db/db.json`, `utf-8`));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
    };
    dbJSON.push(newNote);
    fs.writeFileSync(`db/db.json`, JSON.stringify(dbJSON));
    res.JSON(dbJSON);
});

