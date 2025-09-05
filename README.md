# The Borges-Claude Taxonomy Quiz, or, "Borges' Bizarre Taxonomy"
A fun minigame made* to illustrate the taxonomy that Borges made and that tickled Foucault enough to write The Order of Things!
*Distantly-Coded with Claude.ai. 

### Introduction
In this universe, I was assigned to report on some "Theory/Criticism," including "The Garden of Forking Paths," Jorge Luis Borges' short story. 

In another universe, importantly, in another time, in another fork, I would have been assigned to read the "Inquisition" or "Inquiry" that originates this taxonomy, which arrives to us from ["The Analytical Language of John Wilkins,"](https://www.ratcatcher.org/_Files/TheAnalyticalLanguageofJohnWilkins.pdf) framed to us as a piece of nonfiction, and yet depending on similar elements of found document, as a correction of another nonfiction document. While "The Garden of Forking Paths," published first in _Sur_ in 1941 (arriving in English via _Ellery Queen's Mystery Magazine_ in 1948), is posed to the reader as a statement, a confession, of the narrator, a Chinese spy for the German army during the Second World War, to his captors and executioners, "The Analytical Language of John Wilkins" appeared a year later in 1942 in _La Nacion_. 

The stories are linked in their firm, explicit references to time long past, a German-Chinese connection, and a drive for some sort of universality. The "Garden" gestures at universal, perceivably simultaneous time of the kind illustrated narratively in the story and as a driving plot device in _Everything, Everywhere, All At Once_ (in which the characters may traverse and draw from these simultaneous timelines), while "John Wilkins" pushes towards the concept of a universal language, one in which all things might be linked together taxonomically using letters not as sounds, but as kinds of digits in a "hexavigesimal" system (26), rather than a Dewey Decimal or Base 2 (binary) to sort concepts and ideas. 

The taxonomy provided to us by Borges, nevertheless, as originating from John Wilkins from an ancient Chinese source, is listed below in the first prompt. There are other taxonomies in this story: a Category of stones, divided into 1. Common, 2. Modics, 3. Precious, 4. Transparent, 5. Insolubles; also a category of Imperfect, Artificial, Recremental, and Natural metals, and so on. 

### Interactionalizing the concept. 
I have with previous projects attempted to interactionalize the arrangement of words and letters on a page^.
As with much of my poetry, in which the guiding question of the piece becomes the formative logic by which I arrange the text^^. 

### Prompts in order.
I used Claude Code to perform this project, as I have others. My care is much more for the interface than for the process of coding, because my output goal is a new process of special interest to me and to language. 

> could you give me three things for each of the categories? (a) belonging to the Emperor, (b) embalmed, (c) tame, (d) sucking pigs, (e) sirens, (f) fabulous, (g) stray dogs, (h) included in the present classification, (i) frenzied, (j) innumerable, (k) drawn with a very fine camelhair brush, (l) et cetera, (m) having just broken the water pitcher, (n) that from a long way off look like flies’

To which Claude correctly identified the origin of the text and provided three examples of each. There is a critical version of this Read.me that interrogates or makes meaning out of Claude's "Choices" (re: Output Associations) in this list, which is found inside the [code of the work](/script.js). The second prompt: 

> I want to make a little mini game that I can host on GitHub pages or Itch.io. Basically, I want to make a matching game where one image at a time appears, and the person has to match it into one of the blank three category spaces for each one. I don't mind if they can't put it back after they've dropped it in. I drew up a basic sketch !

The sketch I uploaded was similar to this screenshot (the screenshot did not include the InDesign interface. 

<img width="939" height="1039" alt="Screenshot 2025-09-05 at 12 18 25 AM" src="https://github.com/user-attachments/assets/fbddf440-bf89-492c-8dfd-2c4adb0ea1a3" />

After Claude made a single-file version of this game, which worked well enough to my liking, I wanted to divide each of these code languages into their own files and distinguish this project from the other works I've done. My final prompt was as follows: 

> This is super! Let's separate the css, the javascript, and the html into separate files. As you do that, let's move the styles into a sepia toned display and rounder sans-serif fonts, and add a feature where you don't check your work until the end of the game, after you've moved all the tiles into the categories!

At the end of this process, I was content with the structure as I had it on my machine. I made several tweaks to the language in the display, mostly the user-facing text in various positions in the code (the "check your work" display, the descriptions of the tiles, and the instructions provided to the user at the top of the webpage). 

^ See the following elements 
- [Permutational Text Eraser](https://github.com/pdedgar1/Erasure_Eraser) - This project will erase every 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, or 9th word as desired by the user (some of these options are stackable).  
- [Full-Text Abedecary](https://github.com/pdedgar1/pd-abedecary) - This project will alphabetize an entire text file and display the text according to a few different rules (grouped or listed, columnar or ruled).
- [Markov Text Generator](https://github.com/pdedgar1/pd-writing-bot) - This project will mashup, reorganize, and generate new text in strings of chosen lengths and amounts given a text file provided by the user (with Javascript, not AI). 

^^ For example, one poem of mine asks "What do you do in a crisis?" Rather than tell the user, the poem is structured as a word search with the answers to such a question provided. The player-poet must discover them for themselves the answer to this question and compose a poem with the words discovered either in order of the list or using the found list as a starting point. 
