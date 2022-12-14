
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          Learn React

      </header>

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <style type="text/css">h1{color:#8A2BE2;}</style>
      <!-- above is the purple title -->

      <title>CSS Cheat Sheet</title>

    <div>

        <div class=container>
          <h1>Hello Cheat Sheet Lovers</h1>
          <div class="box-1">
            <h2>Hello and Welcome</h2>
            <p>Welcome, thanks for visiting. This is a CSS cheatsheet.
              I am making this current page to demonstrate that I have followed
              the document sent listing prep material for a technical discussion.
              This is from a 1 hr 25 min video on youtube called 'CSS Crash Course for absolute beginners'.
              These are basic skills that any full-stack dev should know. I will put them all on this page.
              See also ./styles.css for details.
              <br />
              This guy on youtube wants us to run
              the html from our filesystem. It's
              probably better to run in local host though.
              I'm sure we will in just a moment, but first
              let's do the same thing for repetition's sake.
              What, you ask?
              An http server in node, my good Sir or Madam!
              <br/>
              Run over to your command line and do a <code>node littleServer.js</code>.
              <br/>
              Anyway, this is a cheatsheet to show some CSS
              examples, but does not include flexbox, that will be separate
              I assume.  Thank you.
              <br/>
              The font-family for this page is Arial, Helvetica, sans-serif. The text color for text
              inside the <code> p tags is #555555 - some kind of grey.</code>
            </p>
          </div>
          <div class="box-2">
            <h2>See you later</h2>
            <p>Welcome, thanks for visiting. This is a second box in the example page.
              Second text Second text Second text Second text Second text Second text
              Second text Second text Second text Second text Second text Second text
              Second text Second text Second text Second text Second text Second text
              <br />
            </p>
          </div>
          <div class='categories'>
              <h2>Categories</h2>
              <ul>
                <li><a href='#'>Category 1</a></li>
                <li><a href='#'>Category 2</a></li>
                <li><a href='#'>Category 3</a></li>
                <li><a href='#'>Category 4</a></li>
              </ul>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
