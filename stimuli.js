////////////////
// STIMULI
///////////////

// Item types
const NON_WORD = "NON_WORD";
const UNRELATED = "UNRELATED";
const RELATED = "RELATED";
const PRACTICE = "PRACTICE";

const GROUPS = [
    "group1",
    "group2",
    "group3",
    "group4"
];

const PRACTICE_ITEMS = [
    { id: 1, item_type: PRACTICE, word: "palve", prime: "onion", correct: 0 },
    { id: 2, item_type: PRACTICE, word: "hot", prime: "stapler", correct: 1}
];

// LIST ONE
////////////

const LIST_GROUP1 = [
    { id: 1, item_type: NON_WORD, word: "slirque", prime: "eyes", correct: 0 },
    { id: 2, item_type: NON_WORD, word: "crawse", prime: "piano", correct: 0 },
    { id: 3, item_type: NON_WORD, word: "thwurp", prime: "rabbit", correct: 0 },
    { id: 4, item_type: NON_WORD, word: "clem", prime: "flower", correct: 0 },
    { id: 5, item_type: RELATED, word: "white", prime: "snow", correct: 1 },
    { id: 6, item_type: RELATED, word: "travel", prime: "suitcase", correct: 1 },
    { id: 7, item_type: UNRELATED, word: "letter", prime: "garden", correct: 1},
    { id: 8, item_type: UNRELATED, word: "clown", prime: "forest", correct: 1 }
];

// Latin Square Extension example;
// This is how i started out from just list one:
//
// Copied list 'group one' and edited all those values to 'sort of matched versions';

//    [ * Where possible, 'pronouncability' and letter matching for non words (just permutation, if possible).
//    [ * To keep it simple, kept the non-word primes the same throughout all copies]
//    [ (The 'true words' have no word frequency matching!) 
//    [ * Tried to match on some 'other things' (linguistic stuff)
//    
//     * Numbered on with ID's in the first "matched" (edited )copy, so:
//
//         List one has ID's 1-8, 
//         This new list with 'matches' get new unique ID's (9-16) (!!!)
//         After that, one can mix,  match according to ID's in the group, latin square or other.
//         
//         _One_ of the 4 groups is _randomly_ chosen in the context of index.html, the experiment file!
//


// LIST TWO
////////////

//note the incremented 'id' values in this 'matched' copy of LIST_GROUP1
const LIST_GROUP2 = [
    { id: 9, item_type: NON_WORD, word: "quelirs", prime: "eyes", correct: 0 },
    { id: 10, item_type: NON_WORD, word: "acrews", prime: "piano", correct: 0 },
    { id: 11, item_type: NON_WORD, word: "pwurth", prime: "rabbit", correct: 0 },
    { id: 12, item_type: NON_WORD, word: "grem", prime: "flower", correct: 0 },
    { id: 13, item_type: RELATED, word: "black", prime: "ink", correct: 1 },
    { id: 14, item_type: RELATED, word: "birth", prime: "baby", correct: 1 },
    { id: 15, item_type: UNRELATED, word: "stamp", prime: "window", correct: 1},
    { id: 16, item_type: UNRELATED, word: "teacher", prime: "beach", correct: 1 }
];

//Made a new copy: the _uneven items_ from list one and the _even items_ from list 2 

//LIST THREE
//////////////

const LIST_GROUP3 = [
    { id: 9, item_type: NON_WORD, word: "quelirs", prime: "eyes", correct: 0 },
    { id: 2, item_type: NON_WORD, word: "crawse", prime: "piano", correct: 0 },
    { id: 11, item_type: NON_WORD, word: "pwurth", prime: "rabbit", correct: 0 },
    { id: 4, item_type: NON_WORD, word: "clem", prime: "flower", correct: 0 },
    { id: 13, item_type: RELATED, word: "black", prime: "ink", correct: 1 },
    { id: 6, item_type: RELATED, word: "travel", prime: "suitcase", correct: 1 },
    { id: 15, item_type: UNRELATED, word: "stamp", prime: "window", correct: 1},
    { id: 8, item_type: UNRELATED, word: "clown", prime: "forest", correct: 1 }
];

//Made another copy, _even items_ from list one and the _uneven items_ from list2

// LIST FOUR
///////////////
const LIST_GROUP4 = [
    { id: 1, item_type: NON_WORD, word: "slirque", prime: "eyes", correct: 0 },
    { id: 10, item_type: NON_WORD, word: "acrews", prime: "piano", correct: 0 },
    { id: 3, item_type: NON_WORD, word: "thwurp", prime: "rabbit", correct: 0 },
    { id: 12, item_type: NON_WORD, word: "grem", prime: "flower", correct: 0 },
    { id: 5, item_type: RELATED, word: "white", prime: "snow", correct: 1 },
    { id: 14, item_type: RELATED, word: "birth", prime: "baby", correct: 1 },
    { id: 7, item_type: UNRELATED, word: "letter", prime: "garden", correct: 1},
    { id: 16, item_type: UNRELATED, word: "teacher", prime: "beach", correct: 1 }
];


// from this list of tables, four lists, 
// --> i.e. now four groups with balancing one or more items
const TEST_ITEMS = [
    {group_name: GROUPS[0], table: LIST_GROUP1},
    {group_name: GROUPS[1], table: LIST_GROUP2},    
    {group_name: GROUPS[2], table: LIST_GROUP3}, 
    {group_name: GROUPS[3], table: LIST_GROUP4}
];

/**
 * Get the list of practice items
 *
 * Returns an object with a group and a table, the group will always indicate
 * "practice" since it are the practice items
 *
 * @returns {object} object with group and table fields
 */
function getPracticeItems() {
    return {group_name : "practice", table : PRACTICE_ITEMS};
}

/**
 * This function will pick a random group from the TEST_ITEMS array.
 *
 * Returns an object with a group and a table, the group will always indicate
 * which list has been chosen for the participant.
 *
 * @returns {object} object with group and table fields
 */
function pickRandomGroup() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_groups = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_groups), 1)
    var retgroup = TEST_ITEMS[shuffled_range[0]];
    return retgroup
}
