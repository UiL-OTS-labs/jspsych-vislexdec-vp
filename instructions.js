/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */

/*
 * HTML string that shows the instruction before the practice
 * The goal of this instruction is that the participant knows 
 * what to do in the task.
 * The strings are concatenated together by adding (+) them
 * together.
 */
const PRE_PRACTICE_INSTRUCTION =
    "<p>Dear Participant,</p>"                          +
    "<p></p>"                                           + // empty line.
    "<p>"                                               +
    "Add instructions about which keys to press here."  +
    "</p>"                                              +
    "<p></p>"                                           +
    "<p>Click below to start the practice phase.</p>"
    ;

// this const could also be PRE_TEST_INSTRUCTION
const POST_PRACTICE_INSTRUCTION =
    "<p>Dear Participant,</p>"                          +
    "<p></p>"                                           + // empty line.
    "<p>"                                               +
    " Add some feedback, or whatever seems fit here."   +
    "</p>"                                              +
    "<p></p>"                                           +
    "<p>Click below to start the test phase.</p>"
    ;