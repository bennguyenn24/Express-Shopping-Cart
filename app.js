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
    const { price, name } = req.body;



    res.json(updatedItem);
});

app.delete("/items/:id", (req, res) => {
    const { id } = req.params;

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});























    // const updatedItems = items.map((item) => {
    //     // If this item is the one we want to change
    //     if (item.id == id) {
    //         // We will change it
    //         return { ...item, price, name };
    //         // Else return this item as is
    //     } else {
    //         return item;
    //     }
    // })

    // const updatedItem = updatedItems.filter((item) => item.id == id);





    // DELETE

    // const newArr = items.filter(item => item.id != id)

    // res.json(newArr);