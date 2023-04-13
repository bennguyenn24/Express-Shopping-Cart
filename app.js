const express = require("express");
const app = express();
const port = 3000;
const items = require("./fakeDb");
app.use(express.json());

app.get("/items", (req, res) => {
    res.json(items);
});

app.post("/items", (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.json({ added: newItem });
});

app.get("/items/:id", (req, res) => {
    const { id } = req.params;

    const lookForItem = items.filter((item) => item.id == id);

    res.json(lookForItem);
});

app.patch("/items/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const updatedItems = items.map((item) => {
        // If this item is the same id as passed through our params
    });

    res.json(lookForItem);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
