# jspsych-vislexdec-vp
Template [visual lexical decision](https://en.wikipedia.org/wiki/Lexical_decision_task) experiment with visual prime

# Context
In this experiment participants need to make a swift decision whether a presented
set of letters - the test stimulus - form a word or a non existent word (nonword).
The participant first see a fixation cross, briefly a prime is presented followed
by the test stimulus. The particpants are instructed to respond as quickly as
possible to indicate wheter the test stimulus is a word or not.

The reaction time, response and correctness of the response are recorded.

# Getting started (the easy way, working internet connection required)
For now, the easiest way to test these templates, is:

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip the jspsych-vislexdec-vp-main.zip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.

# Getting started (the harder way, local and/or custom setup)

You need this github repository and to download the jsPsych library version 6.1
complete the following steps. When downloading and extracting folders please
keep in mind that once working on the server, filenames are case sensitive and
"jsPsych.js" and "jspsyc.js" are two distinct filenames. It might work on your
machine, but it might not work on the server hosting your experiment.

You will need to adapt your own directory structure/naming convention in the
top <script> tags as defined in index.html, if you want your own local jsPsych setup.

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip the jspsych-vislexdec-vp.zip at a location of your choosing.
3. Download jsPsych-6.1.0 (-6.1.0 is the version) from the jsPsych releases website
   https://github.com/jspsych/jsPsych/releases. You might need to scroll down a little.
4. Extract the jsPsych folder into the jspsych-vislexdec-vp folder you extracted earlier.
5. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.

# Template paradigm documentation (concept)
Lab support and teachers are in the process of creating template/boilerplate experiments for you to easily set up certain types of experiments. The idea behind this, is that within certain boundaries, it should be easy to get an experiment running without (too much) programming skills, by just editing the default stimulus files. Traditionally, we've used ZEP {link} all around our labs for time critical experimentation and there are many tempates to start with. ZEP was designed in house and has been designed to accurately sync sound, visuals/text and/or other hardware (eye tracking, EEG, EMG, etc) in a 'traditional' research lab setup. By that we mean:

- A quite controlled/controllable environment qua hardware, software, possible distractions
- Physically being bound to the lab
- Relatively small samples, optimised for "Wilhelm Wund" style traditional research

This type of training is probably going to be problematic for a while, due to COVID-19. So after a period of research & R&D, we've decided to choose the custom Javascipt library aimed at experimental research using a browser, called jsPsych {link} as our alternative for lab-based work. A couple of remarks here:

- The 'web' can not offer the accuracy and precision needed for certain paradigms.
- Variations in hardware, software, internet speed, random noise and distraction and many other aspects my cause variations at multiple levels.
- Especially when sounds _and_ images need to be synced, be sure to define means to verify or falsify presentation and test well.

On the other hand:
- The _principles_ of most paradigms can still be taught and learned
- You could potentially get a lot more data, which may to some extent compensate noise and little control
- Contrary to ZEP, you can find a lot of examples online, there is a huge user base for jsPsych

# Mini-overview of a jsPsych experiment
It's a good idea to really read the documentation on https://www.jspsych.org. The basic things like how some 'experiment.html' file imports from the jspsych library, where and how plugins can be used are quite good to begin with.

It gets a bit more complicated when you discover that there are two modes in which alll can be run:

- Locally on your PC, by double clicking the html file
- Full web server implementation (getting a link to the experiment, served by ICT&Media).

These two modes will likely confuse those who are not web developers, but the bottom line is: 

- A locally developed experiment will not guarantee that the same experiment will run in a server setup, or vice versa. 

Many browsers and versions have their own defaults for security like autoplay, allowing sounds, pop-ups, importing images from local sources, etc. It is impossible to know 100% sure if things will work in your browser in advance, so be prepared to deal with some confusion.

In this stage, we will limit things to running the templates __locally__, which has implications for the reliablity and format of the data. Also: locally does NOT mean that it can be run without an internet connection in most cases, due to the nature of loading external scripts.

Not all of our education staff and lab staff have a firm background in web development, so things take time, experimentation and community building to make things better, but well, work in progress...

# Some best practices for jsPsych experiments

## Audio
In the case of web server setup, it is as good idea to initialise jsPysch with ```use_webaudio = true```, in case you use audio stimuli. This is typically faster than when false.

## Preload media, like images, video, audio
In general, since timing is important, please make sure to [pre-load all media files](https://www.jspsych.org/overview/media-preloading/).

## Always start an experiment with a html-button-response interaction part
Browsers will often disallow auto-playing sound/video if there is no user activity related to a _mouse click_. It would be a shame to start of the experiment with errors of this type. An _instruction_ (plugin) with a mouse button response (or a multi-page instuction) will also fix this poitential error.

# HTML, CSS, Javascipt, jsPscyh, jsPsych default plugins

How some concepts relate to each other:

## HTML
- HTML is a markup language, not a programming language
- All HTML files have a similar structure
- With the ```<script>somescipt.js</scipt>``` tags, you can use Javascript in HTML

## Javascript
- Javascipt is a (web) _programming language_.
- You can use functions, create custom code with interaction! 
- There is no "official standard" for coding Javascipt, but it is very powerful  

## CSS
- CSS deals with mainly styling, like layouts, fonts, colors, backgrounds.
- CSS evolved from being just a place to put styling parts in a separate file than the html fuile, but is becoming more like a programming language, in a way.

## jsPsych
- jspsych _uses_ Javascript code for a specific experimental purpose and the functions from this library need to be imported in the top op your html file before you can use them.
- You *could* run an experiment in your browser while being offline, if you only refer to local sources that are imported in the relative path (todo)
- If you would need or want to load scripts from an online location (```<script>https://some.cooljavacript.js</script>```) in your experiment, you _could_. 
  - But then, do make sure that the locally run code *does* have a working internet connection!

# You need a plain text editor
Be sure to read up on the lab website and learn about rich text vs plain text and how to be able to edit and inspect your files not using LibreOffice, Microsoft or Apple defaults. (todo)

# CSV, JSON and javascript style 

- Lab website on csv links
- Other links

## CSV

### Headers, rows and columns

Pro: 
- Everyone knows spreadsheets and a bit of how to use it.

Cons: 
- CSV exports may vary between spreadsheet programs
- There is no fixed standard for quoting and field separators
- Multiline text stimuli with whitespace/layout options is often problematic
- CSV exports are difficult to read at the level of plain text editing

### Examples of some stimulus file setup in CSV table style

#### No quotes:

id | condition | string 
---|-----------|------- 
1  | nonword   | brlr
2  | word      | ball
3  | nonword   | pjrt

#### Some variable type is quoted, some is not, but it may be needed to do things way:

id | condition | string 
---|-----------|------- 
1  | "nonword" | brlr
2  | "word"    | ball
3  | "nonword" | pjrt

id | condition | string 
---|-----------|------- 
1  | nonword   | "brlr"
2  | word      | "ball"
3  | nonword   | "pjrt"

#### This will drive most people crazy, but it might just work

id | condition | string 
---|-----------|------- 
1  | "nonword" | "brlr"
2  | word      | "ball"
3  | nonword   | pjrt

#### A valid reason to use quotes can be found here
id | condition | string 
---|-----------|------- 
1  | nonwords  | blerg noppa
2  | words     | "it's complicated"
3  | nonwords  | floep quotenot


#### But consitency is often better
id | condition | string 
---|-----------|------- 
1  | nonwords  | "blerg noppa"
2  | words     | "it's complicated"
3  | nonwords  | "floep quotenot"

#### Multiline text with quotes and how this

id | condition | string 
---|-----------|------- 
1  | "gram"    | "I would like to have a real cool enter <linebreak under LibreOffice fiddly field layout> right here but it's so difficult to have my cake and eat it."
2  | "ungram"  | "I have would a like enter <linebreak under Microsoft Office excel windows fiddly field layout> cool so difficult but to no luck"
   
This last file could, exported from your tool of choice end up looking like:

```
id,condition,string 
1,"gram","I would like to have a real cool enter\nright here but it's so difficult to\n have my cake and eat it."
2,"ungram","I have would a like enter cool\n so difficult but to no luck"
```
Or, if you followed the old ZEP tutorial well and chose the ";" as field separator:

```
id;condition;string 
1;"gram";"I would like to have a real cool enter\nright here but it's so difficult to\n have my cake and eat it."
2;"ungram";"I have would a like enter cool\n so difficult but to no luck"
``` 

Good luck figuring out why the program crashes at some trial where you made one quoting error in the excel sheet your partner exported, but is not at your disposal, especially if that file consists of a latin square with 200 multiline stimuli that is randomised by jsPsych in it's execution context.   

In short:

- Layouting, dealing with formatting, line breaks etc is always going to be a drag. 
- But with swicthing between excel, plain text, exports etc, CSV, it can be terribly confusing.
- But, if you keep it simple and are aware of things, you can use converters from CSV to formats that we think are better. 
(Link to converter code MJA)

# JSON version
```
[
    {
        "id": "1",
        "condition": "nonword",
        "string": "brlr"
    },
    {
        "id": "2",
        "condition": "word",
        "string": "ball"
    },
    {
        "id": "3",
        "condition": "nonword",
        "string": "pjrt"
    }
]
```

# Current implementation: stimuli.js (javascript object)
In the first templates we will deliver, we design out stimulus configurations in the javascript key-value pair style. It's not that difficult and has the benefits of being available without using extra code to implement the availablity ot test items in context of an experiment. 
```
var stimuli = [
    {
        id: "1",
        condition: "nonword",
        string: "brlr"
    },
    {
        id: "2",
        condition: "word",
        string: "ball"
    },
    {
        id: "3",
        condition: "nonword",
        string: "pjrt"
    }
]


```
Now, with that, we are already speaking some real javascript!

### Arrays in javascript
```
//This defines an array named myArray
var myArray = ['item', 'another item']; 
```
```
//This is an array, too
var myArrayToo = [
    'item two', 
    'another item two, too'
    ];
 ```
 Note this.
 ```
 //This is an array, too
 var myArrayToo = ['item two', 'another item two, too'];
 ```
 
 or 
 ```
 //This is an array, too
var myArrayToo = [
    "item two", 
    'another item two, too'
    ];
```
# Timelines and trials and designs

There are many randomisation batteries included in jsPsych, if you have not read about timelines, you have to look for them using the link, they are important.

(...todo)

Typical folder structure:

```
visdeclex/
         /index.html        <---- Double-click this (index).html file to start)
         /jspsych           <---- Depends on configuration (web server or local)
         /css               <---- Optionally, experiment specific styling code. 
         /stimuli.js        <---- Usually a file called stimuli.js
         /globals.js        <---- Often a file called globals.js
         /generic.js        <---- Usually a file called stimuli.js
```

# Plugins and its template format

# Order

# Data (current)

# Canvas

# Data storage 

# Github, bugs, feature request and contributing?
  
# License











  

