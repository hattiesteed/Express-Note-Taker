const router = require(`express`).Router();
const fs = require(`fs`);

// get request for api notes page
router.get(`/api/notes`, async (req, res) => {
    const dbJSON = await JSON.parse(fs.readFileSync(`./db/db.json`, `utf8`));
        res.json(dbJSON);
});

// post request for api notes page
router.post(`/api/notes`, (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync(`./db/db.json`, `utf8`));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: dbJSON.length +1,
    };
    console.log(newNote);
    dbJSON.push(newNote);
    fs.writeFileSync(`db/db.json`, JSON.stringify(dbJSON));
    res.json(dbJSON);
});

router.delete("/api/notes/:id", (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const noteId = req.params.id;
    const newDbJson = dbJSON.filter((note) => note.id != noteId);
    fs.writeFileSync("db/db.json", JSON.stringify(newDbJson));
    res.json(newDbJson);
})

module.exports = router;
