<p align=center>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

---
## Getting Sarted 🎉
This project is built on **MERN** stack, to setup local enviroment follow these steps:

- clone the repo 
- get inside the repo using `cd Quizzer`
- install the dependencies `npm i`, this will install the dependency for the nodejs enviorment 
- get inside the client folder `cd client` 
- to install the react dependencies run command `npm i`

- to run the nodejs dev server run `npm run dev-server`
- to run the react dev server run `npm run dev-client`

---

## Update
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
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Ask-Subhasmita"><img src="https://avatars2.githubusercontent.com/u/57298668?v=4" width="100px;" alt=""/><br /><sub><b>Subhasmita Swain</b></sub></a><br /><a href="#content-Ask-Subhasmita" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.linkedin.com/in/imabp"><img src="https://avatars3.githubusercontent.com/u/53480076?v=4" width="100px;" alt=""/><br /><sub><b>Abir</b></sub></a><br /><a href="https://github.com/Ninja-Developers/Quizzer/commits?author=imabp" title="Code">💻</a></td>
    <td align="center"><a href="https://souvik210899.herokuapp.com/"><img src="https://avatars0.githubusercontent.com/u/41781438?v=4" width="100px;" alt=""/><br /><sub><b>souvik</b></sub></a><br /><a href="https://github.com/Ninja-Developers/Quizzer/commits?author=Souvikns" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!