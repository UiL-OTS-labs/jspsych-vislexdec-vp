
// Item types
const NON_WORD = "NON_WORD";
const REAL_WORD = "REAL_WORD";

const practice_items = [
    {id: 1, item_type: NON_WORD, word: "palve"},
    {id: 2, item_type: REAL_WORD, word: "hot"}
];

const test_items_1 = [
    {id: 1, item_type: NON_WORD, word: "slirque"},
    {id: 2, item_type: NON_WORD, word: "crawse"},
    {id: 3, item_type: NON_WORD, word: "twurp"},
    {id: 4, item_type: NON_WORD, word: "clem"},

    {id: 5, item_type: REAL_WORD, word: "white"},
    {id: 6, item_type: REAL_WORD, word: "travel"},
    {id: 7, item_type: REAL_WORD, word: "letter"},
    {id: 8, item_type: REAL_WORD, word: "clown"}
];

const test_items = [
    test_items_1
];

function pick_random_group() {
    console.log("pick_random_group, make it random")
    return test_items[0];
}