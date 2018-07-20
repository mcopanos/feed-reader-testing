# Project Overview

In this project I was given a web-based application that reads RSS feeds. Testing includes [Jasmine](http://jasmine.github.io/) and the goal for this was to write test for code that was already written and make sure all my tests passed.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Run Process
Clone or download this repo. Open the index.html file to see the test results. Tests are located in the feedreader.js file in the spec folder that is located in the jasmine folder. This project runs on jasmine so you may need to install jasmine globally and locally to run the tester in your browser. To install locally just type in your terminal: npm install --save-dev jasmine. To install globally type in your terminal: npm install -g jasmine.

## Steps to complete this project?

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. Write a new test suite named "The menu".

4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

6. Write a test suite named "Initial Entries".

7. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

8. Write a test suite named "New Feed Selection".

9. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
