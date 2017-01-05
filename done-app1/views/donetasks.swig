<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <script src="./js/donetasks.js" defer></script>
    <script src="./js/tags.js" defer></script>
    <title>DONE</title>
  </head>

  <body>
    <header>
      <label for="show-menu" class="show-menu"><img src="/styles/done_logo.svg" class="logo1" height="50" width="130" alt=""/></label>
      <input type="checkbox" id="show-menu">
      <nav>
        <a href="tasks.html"><img src="/styles/done_logo.svg" class="logo" height="50" width="130" alt=""/></a>
        <ul id="menu">
          <li><a href="/">TO DOs</a></li>
          <li><a href="/dones" id="active">DONEs</a></li>
          <li><a href="/productivity">Productivity</a></li>
          <li class="drop">
            <input id="check02" type="checkbox" name="menu"/>
            <label for="check02">Profile &#9662;</label>
            <ul class="submenu">
              <li><a href="/profile">View Profile</a></li>
              <li><a href="/logout">Log out</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div class="wrapper">
      <div class="tagsmobile">
        <noscript>
          <label for="show-tags" class="show-tags">
            TAGS &#9662;
          </label>
          <input class="hidecheckbox" type="checkbox" id="show-tags">
          <ul id="tags">
            <li><input type="checkbox" checked>All</li>
            <li><input type="checkbox">Home</li>
            <li><input type="checkbox">Work</li>
          </ul>
        </noscript>
      </div>

      <div class="tags">
        <h3>TAGS</h3>
        <ul>
          <li><input type="checkbox" checked>All</li>
          {% for tag in tags %}
            <li><input type="checkbox">{{ tag.name }}</li>
          {% endfor %}
        </ul>
      </div>


      <div id="ToDoInfo" class="modalDialog modalInfo">
        <div>
          <a class = "edit" href="#edit">Edit</a>
      		<a href="#close" title="Close" class="close">X</a>
          <form>
            <h3>TO DO NAME</h3>
            <p>Description description description description description description description description description.</p>
            <p>Deadline: 27.11.2016</p>
            <p>Priority rate: 5</p>
            <p>Tags: Home</p>
          </form>
      	</div>
      </div>


      <div class="tasks">
        <section class="othertasks">
          <h3>DONEs</h3>
          <br>
          {% for task in tasks %}
            <div class="card p{{ task.priority }}">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>{{ task.name }}</b>
                <p>Priority rate: {{ task.priority }}</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
          {% endfor %}
          <noscript>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p5">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 5</p>
                <input type="checkbox">UNDONE
              </div>
            </div>

            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p4">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 4</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">UNDONE
              </div>
            </div>
          </noscript>
        </section>
      </div>
    </div>
    <footer>
      <p>© Copyright: 2016 All rights reserved |
      Contact information: greta.gasparac@gmail.com</p>
    </footer>
  </body>
</html>
