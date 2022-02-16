////////////////
// STIMULI
///////////////

// Item types
const NON_WORD = "NON_WORD";
const UNRELATED = "UNRELATED";
const RELATED = "RELATED";
const PRACTICE = "PRACTICE";
const LISTS = [
    "Default Group",
];

// In case of more complex design, the above could be, for example:

// const LISTS = [
//     "my_first_list",
//     "my_second_list"
// ];

const PRACTICE_ITEMS = [
    { id: 1, item_type: PRACTICE, word: "palve", prime: "onion", correct: 0 },
    { id: 2, item_type: PRACTICE, word: "hot", prime: "stapler", correct: 1}
];

// 'Test' items and their timelineVariable 'key: value' pairs

const LIST_1 = [
    { id: 1, item_type: NON_WORD, word: "slirque", prime: "eyes", correct: 0 },
    { id: 2, item_type: NON_WORD, word: "crawse", prime: "piano", correct: 0 },
    { id: 3, item_type: NON_WORD, word: "thwurp", prime: "rabbit", correct: 0 },
    { id: 4, item_type: NON_WORD, word: "clem", prime: "flower", correct: 0 },
    { id: 5, item_type: RELATED, word: "white", prime: "snow", correct: 1 },
    { id: 6, item_type: RELATED, word: "travel", prime: "suitcase", correct: 1 },
    { id: 7, item_type: UNRELATED, word: "letter", prime: "garden", correct: 1},
    { id: 8, item_type: UNRELATED, word: "clown", prime: "forest", correct: 1 }
];

const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_1}
];

// If there were two lists to choose from:

// const TEST_ITEMS = [
//     {list_name: LISTS[0], table: LIST_1},
//     {list_name: LISTS[1], table: LIST_2}
// ];


function getPracticeItems() {
    return {list_name : "practice", table : PRACTICE_ITEMS};
}

function pickRandomList() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_lists = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_lists), 1);
    var retlist = TEST_ITEMS[shuffled_range[0]];
    return retlist;
}
