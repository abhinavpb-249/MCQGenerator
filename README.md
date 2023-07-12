# MCQGenerator
HTML Code generator to display interactive Multiple choice questions in your website.

Just Type the question and options, mark the correct one and enter. An Html code will be given which can be copied and pasted to your website. 

<b>Features</b>
<ul>
<li>Multiple questions can be added</li>
<li>Custom text can be displayed depending on whether the answer is right or wrong </li>
<li>If the user clicks on the wrong answer, the correct answer will be immediately displayed with green.</li>

</ul>

<hr>

<b> Working </b>

I wrote this code a few years ago when I just starting to learn Javascript. So there will be unnecessary parts in the code. But it works, so I haven't changed it.

The output is an HTML code to produce an MCQ, and the questions and options are changed according to the user input via innerHTML.

When the user clicks on the radio with the label "<i>Option A is correct</i>",
we change the id of the option A to indicate that it is right and change the value of else to indicate that it is wrong.
With the code provided to the user, the option with the "correct Id" is changed to green and the one with the "wrong Id" will be changed to red upon clicking.

Finally, the div with the Id "Correct_explanation" is shown if the selected answer is correct, and if it wrong the div with the Id "Wrong_explanation" is shown.
