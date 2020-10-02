
// Item types
const NON_WORD = "NON_WORD";
const REAL_WORD = "REAL_WORD";

const groups = [
    "group1"
    // "group2",
    // "group3"
];

const practice_items = [
    {id: 1, item_type: NON_WORD, word: "palve"},
    {id: 2, item_type: REAL_WORD, word: "hot"}
];

const list_group1 = [
    {id: 1, item_type: NON_WORD, word: "slirque"},
    {id: 2, item_type: NON_WORD, word: "crawse"},
    {id: 3, item_type: NON_WORD, word: "twurp"},
    {id: 4, item_type: NON_WORD, word: "clem"},

    {id: 5, item_type: REAL_WORD, word: "white"},
    {id: 6, item_type: REAL_WORD, word: "travel"},
    {id: 7, item_type: REAL_WORD, word: "letter"},
    {id: 8, item_type: REAL_WORD, word: "clown"}
];

// Add a second list of stimuli when required.
// const list_group2 = [
// ...
// ]

const test_items = [
    {group_name: groups[0], table: list_group1}
    // Add the second group here, put a comma on the end of the line above here.
    //{group_name: groups[1], table: list_group2}
];

// this function will pick a random group
function pick_random_group() {
    let range = function (n) {
        let empty_array = []
        for (var i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_groups = test_items.length;
    return test_items[jsPsych.randomization.repeat(range(num_groups), 1)];
}