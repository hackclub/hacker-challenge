# hacker-challenge

https://hacker-challenge.netlify.app/

Use your inspector to hack your way through a series of challenges. Made for those who are new to the web inspector.

The web inspector is a hidden panel available in all web browsers that allows you to navigate through elements on a page and temporarily change them.

In Google Chrome, you can open your web inspector by right clicking in the browser window and clicking the last option, "Inspect".

## Useful Inspector Tabs
- Once the inspector is open, you will immediately see the HTML being rendered on the page. This is the "Elements" tab. Use this area to expand and collapse the HTML sections to have a look around.
- The next tab over is the "Console" tab. This shows the logs and errors of the JavaScript that's being rendered on the page. You will see validation, tips, and hints here.
- "Sources" is the next tab over. It'll tell you what files are being loaded into the browser for that page. Here you should see our HTML, JavaScript, and CSS.
- If you skip over a few tabs, the last tab we will be using is the "Application" tab. Here we will be working with the "Local Storage" area, which shows any data that our website has saved to your browser.

## Running locally
Hacker Challenge is a simple static site. To run locally, clone this GitHub repository and `cd` into it. From there, you can run `python -m SimpleHTTPServer` in your terminal and then open `http://localhost:8000` in your browser.

## Contributing
Do you have an idea for a challenge to add? Feel free to contribute by creating a pull request or adding an issue with the suggestion.

### Adding a new challenge
- Duplicate the [challenges/template.html](challenges/template.html) page in both the `hard` and `normal` folder and edit it as you need.
- Rename the files to an animal in alphabetical order from the last page, so people can't immediately guess the next challenge page. Feel free to use [this site](https://a-z-animals.com/animals/) to stoke your creativity.
- Add a section [in the global](scripts/global.js), [in the normal](scripts/normal.js), or [in the hard](scripts/hard.js) scripts as necessary.
- Add any [styles in the CSS](style.css) as necessary.
- Create a [Pull Request](https://github.com/jessicard/hacker-challenge/compare) when you're ready!
