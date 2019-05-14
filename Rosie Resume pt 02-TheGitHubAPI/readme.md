# Description of code order in github-information.js file

API and adding GitHub functionality
Below is the order of code that I need to add to the github.html and github-information.js files

## 01 GitHub Form

### github.html

Add script:
Line 12

div class="center-form"
Lines 63 - 68

## 02 Initial data retrieval setup

### github-information.js

fetchGitHubInformation(event)
Line 39 - 52

(Lines 40-42 are added in 05 bug fixes)

## 03 Making "Promises"

When:
    // something has finished happening
Then:
    // do something else

Lines 54 - 76

## 04 Rendering (framställnig) user data

userInformationHTML(user)
Lines 1 - 16

## 05 Getting the repo data

So that we can receive repository data from GitHub
getJSON method
Lines 55 - 62

## 06 Rendering (framställning) repo data

repoInformationHTML(repos)
Lines 18 - 37

## 07 Bub fixes

Clear the "gh-repo-data" (user and repo) when there is an empty box.
lines 40 - 41

Octocat display: ready(fetchGitHubInformation)
Line 79

## 08 API throttling

else if function
lines 68 - 70
