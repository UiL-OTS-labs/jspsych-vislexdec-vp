
// Item types
const NON_WORD = "NON_WORD";
const UNRELATED = "UNRELATED";
const RELATED = "RELATED";

const groups = [
    "group1"
    // "group2",
    // "group3"
];

const practice_items = [
    {id: 1, item_type: NON_WORD, word: "palve", prime: "onion"},
    {id: 2, item_type: UNRELATED, word: "hot", prime: "stapler"}
];

const list_group1 = [
    {id: 1, item_type: NON_WORD, word: "slirque", prime: "eyes"},
    {id: 2, item_type: NON_WORD, word: "crawse", prime: "piano"},
    {id: 3, item_type: NON_WORD, word: "twurp", prime: "rabbit"},
    {id: 4, item_type: NON_WORD, word: "clem", prime: "flower"},

    {id: 5, item_type: RELATED, word: "white", prime: "snow"},
    {id: 6, item_type: RELATED, word: "travel", prime: "suitcase"},
    {id: 7, item_type: UNRELATED, word: "letter", prime: "garden"},
    {id: 8, item_type: UNRELATED, word: "clown", prime: "forest"}
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

// Get the list of practice items
//
// returns json object with a group and a table, the group will always indicate
// "practice" since it are the practice items
function get_practice_items() {
    return {group_name: "practice", table: practice_items};
}

// this function will pick a random group from the test_items array.
//
// returns json object with a group and a table, the group will always indicate
// wich list has been chosen for the participant.
function pick_random_group() {
    let range = function (n) {
        let empty_array = []
        for (var i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_groups = test_items.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_groups), 1)
    var retgroup = test_items[shuffled_range[0]];
    return retgroup
}
