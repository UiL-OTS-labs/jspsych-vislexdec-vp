# jspsych-vislexdec-vp
Template [visual lexical decision](https://en.wikipedia.org/wiki/Lexical_decision_task) experiment with visual prime

# Context and status

# Template paradigm documentation (concept)
Lab support and teachers are in the process of creating template/boilerplate experiments for you to easily set up certain types of experiments. The idea behind this, is that within certain boundaries, it should be easy to get an experiment running without (too much) programming skills, by just editing the default stimulus files. Traditionally, we've used ZEP {link} all around our labs for time critical experimentation and there are many tempates to start with. ZEP was designed in house and has been designed to accurately sync sound, visuals/text and/or other hardware (eye tracking, EEG, EMG, etc) in a 'traditional' research lab setup. By that we mean:

- A quite controlled/controllable environment qua hardware, software, possible distractions
- Physically being bound to the lab
- Relatively small samples, optimised for "Wilhelm Wund" style traditional research

This type of training is probably going to be problematic for a while, due to COVID-19. So after a period of research & R&D, we've decided to choose the custom Javascipt library aimed at experimental research using a browser, called jsPsych {link} as our alternative for lab-based work. A couple of remarks here:

- The 'web' can not offer the accuracy and precision needed for certain paradigms.
- Variations in hardware, software, internet speed, random noise and distraction and many other aspects my cause variations at multiple levels. 

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
1  | "gram"    | "I would like to have a real cool enter
   |           |  right here but it's so difficult to 
   |           |  have my cake and eat it."
2  | "ungram"  | "I have would a like enter cool
   |           |  so difficult but to no 
   |           |  luck"
   
This last file could, exported from your tool of choice end up looking like:

```
id,condition,string 
1,"gram","I would like to have a real cool enter\nright here but it's so difficult to\n have my cake and eat it."
2,"ungram","I have would a like enter cool\n so difficult but to no\nluck"
```
Or, if you followed the old ZEP tutorial well and chose the ";" as field separator:

```
id;condition;string 
1;"gram";"I would like to have a real cool enter\nright here but it's so difficult to\n have my cake and eat it."
2;"ungram";"I have would a like enter cool\n so difficult but to no\nluck"
``` 
Good luck figuring out why the program crashes at some trial where you made one quoting error in the excel sheet your partner exported, but is not at your disposal, especially if that file consists of a latin square with 200 multiline stimuli that is randomised by jsPsych in it's execution context.   

In short:

- Layouting, dealing with formatting, line breaks etc is always going to be a drag. 
- But with swicthing between excel, plain text, exports etc, CSV, it can be terribly confusing.
- But, if you keep it simple and are aware of things, you can use it. 
(Link to converter code MJA)

# JSON version:
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

TODO, now let's just commit some context...


Typical folder structure:

```
visdeclex/
         /visdeclex.html    <--- Double-click this .html file to start experiment)
         /jspsych           <----The jsPsych official library, not our code!)
         /css               <----(Optional) experiment specific styling code 
         /js/               <----(template-specific Javascript code in this folder)
            /stimuli.js     <---- Usually a file called stimuli.js  

```













  

