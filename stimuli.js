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
    { id: 1, item_type: PRACTICE, word: "palve", prime: "onion", expected_response: 0 },
    { id: 2, item_type: PRACTICE, word: "hot", prime: "stapler", expected_response: 1}
];

// 'Test' items and their timelineVariable 'key: value' pairs

const LIST_1 = [
    { id: 1, item_type: NON_WORD, word: "slirque", prime: "eyes", expected_response: 0 },
    { id: 2, item_type: NON_WORD, word: "crawse", prime: "piano", expected_response: 0 },
    { id: 3, item_type: NON_WORD, word: "thwurp", prime: "rabbit", expected_response: 0 },
    { id: 4, item_type: NON_WORD, word: "clem", prime: "flower", expected_response: 0 },
    { id: 5, item_type: RELATED, word: "white", prime: "snow", expected_response: 1 },
    { id: 6, item_type: RELATED, word: "travel", prime: "suitcase", expected_response: 1 },
    { id: 7, item_type: UNRELATED, word: "letter", prime: "garden", expected_response: 1},
    { id: 8, item_type: UNRELATED, word: "clown", prime: "forest", expected_response: 1 }
];

const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_1}
];

// If there were two lists to choose from:

// const TEST_ITEMS = [
//     {list_name: LISTS[0], table: LIST_1},
//     {list_name: LISTS[1], table: LIST_2}
// ];
