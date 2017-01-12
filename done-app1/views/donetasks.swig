<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <script src="./js/donetasks.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <title>DONE</title>
  </head>

  <body>
    <header>
      <label for="show-menu" class="show-menu"><img src="/styles/done_logo.svg" class="logo1" height="50" width="130" alt=""/></label>
      <input type="checkbox" id="show-menu">
      <nav>
        <a href="tasks.html"><img src="/styles/done_logo.svg" class="logo" height="50" width="130" alt=""/></a>
        <ul id="menu">
          <li><a href="/">{{ __("TO DOs") }}</a></li>
          <li><a href="/dones" id="active">{{ __("DONEs") }}</a></li>
          <li><a href="/productivity">{{ __("Productivity") }}</a></li>
          <li class="drop">
            <input id="check02" type="checkbox" name="menu"/>
            <label for="check02">{{ __("Profile") }} &#9662;</label>
            <ul class="submenu">
              <li><a href="/profile">{{ __("View Profile") }}</a></li>
              <li><a href="/logout">{{ __("Log out") }}</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div class="wrapper">
      <div class="tagsmobile">
        <label for="show-tags" class="show-tags">
          {{ __("TAGS") }} &#9662;
        </label>
        <input class="hidecheckbox" type="checkbox" id="show-tags">
        <ul id="tags">
          <li><input type="radio" name="tags" checked><span>{{ __("All") }}</span></li>
          {% for tag in tags %}
            <li><input name="tags" id="{{ tag.tagid }}" type="radio"><span>{{ tag.name }}</span></li>
          {% endfor %}
        </ul>
      </div>


      <aside class="tags">
        <h3>{{ __("TAGS") }}</h3>
        <ul>
          <li><input type="radio" name="tags" checked><span>{{ __("All") }}</span></li>
          {% for tag in tags %}
            <li><input name="tags" id="{{ tag.tagid }}" type="radio"><span>{{ tag.name }}</span></li>
          {% endfor %}
        </ul>
      </aside>


      <div id="ToDoInfo" class="modalDialog modalInfo">
          <div>
            <a class="edit" href="#edit" onclick="values()">{{ __("Edit") }}</a>
        		<a href="#close" title="Close" class="close">X</a>
            <h3>{{ __("TO DO NAME") }}</h3>
            <p class="infoDescription">Description description description description description description description description description.</p>
            <p class="infoDeadline">{{ __("Deadline") }}: </p>
            <p class="infoPriority">{{ __("Priority rate") }}: </p>
            <p class="infoTags">{{ __("Tags") }}: </p>
        	</div>
      </div>


      <div class="tasks">
        <section class="othertasks">
          <h3>{{ __("DONEs") }}</h3>
          <br>
          {% for task in tasks %}
            <div class="card p{{ task.priority }}" id="{{ task.taskid }}" data-tag="{{ task.tag }}" onclick="showInfo(this.id)">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>{{ task.name }}</b>
                <p>{{ __("Priority rate") }}: {{ task.priority }}</p>
                <input name="done" type="checkbox">{{ __("UNDONE") }}
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
      <p>© Copyright: 2016 {{ __("All rights reserved") }} |
      {{ __("Contact information") }}: greta.gasparac@gmail.com</p>
    </footer>
  </body>
</html>
