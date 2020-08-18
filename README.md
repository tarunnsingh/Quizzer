<p align=center>
<img src="./assets/ReadmeHeader.png"/>
</p>

<p align=center>
<table>
<tr><td>Quizzer helps you to create random and fun quizzes for your community-events, students and teachers.
<br>
It also helps you to manage and reform various operations in the quiz, such as real time changes in questions, options and lot more features coming up.
</td>
</tr>
</table>
</p>
<b>Update</b><br>
We will be launching soon our Quizzer API where developers can create their custom experiences for user based on requirements.

### Models
##### Worksheet Model

Each worksheet contains 
<table>
<tr>
<th>Attribute Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
<tr>
<td>
userID</td><td>String</td><td>YES</td><td> The id of the quiz Organizer.</td></tr>
<tr>
<td>Questions</td><td>Quiz</td><td>YES</td> <td>array of Quiz Models</td> </tr>
</table>


##### Quiz Model

Each Quiz contains.
<table>
<tr>
<th>Attribute Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
<tr>
<td>
Question</td><td>String</td><td>YES</td><td> Question to be asked</td></tr>
<tr>
<td>Options</td><td>array of option having String type and enum a,b,c,d</td><td>YES</td> <td>Choices for question</td></tr>
<tr><td>Answer</td><td>String having enum a,b,c,d</td><td>YES</td><td>Correct answer for the question</td></tr>
</table>