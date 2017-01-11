<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <script src="/js/tasks.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>


    <title>DONE</title>
  </head>

  <body>
    <header>
      <label for="show-menu" class="show-menu">
        <img src="/styles/done_logo.svg" class="logo1" height="50" width="130" alt=""/>
      </label>
      <input type="checkbox" id="show-menu">
      <nav>
        <a href="/"><img src="/styles/done_logo.svg" class="logo" height="50" width="130" alt=""/></a>
        <ul id="menu">
          <li><a href="/" id="active">TO DOs</a></li>
          <li><a href="/dones">DONEs</a></li>
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
        <a class ="add" href="#addTag">+</a>
        <label for="show-tags" class="show-tags">
          TAGS &#9662;
        </label>
        <input class="hidecheckbox" type="checkbox" id="show-tags">
        <ul id="tags">
          <li><input type="radio" name="tags" checked><span>All</span></li>
          {% for tag in tags %}
            <li><input name="tags" id="{{ tag.tagid }}" type="radio"><span>{{ tag.name }}</span></li>
          {% endfor %}
        </ul>
      </div>


      <aside class="tags">
        <a class ="add" href="#addTag">+</a>
        <h3>TAGS</h3>
        <ul>
          <li><input type="radio" name="tags" checked><span>All</span></li>
          {% for tag in tags %}
            <li><input name="tags" id="{{ tag.tagid }}" type="radio"><span>{{ tag.name }}</span></li>
          {% endfor %}
        </ul>
      </aside>

      <div id="addTag" class="modalDialog modalTag">
        <div>
      		<a href="#close" title="Close" class="close">X</a>
          <form id="newTag" method="post" action="/newtag">
            <h3>NEW TAG</h3>
            TAG NAME: <input type="text" name="tagname" required>
            <input type="submit" value="Add TAG">
          </form>
      	</div>
      </div>

      <div id="addToDo" class="modalDialog">
        <div>
      		<a href="#" title="Close" class="close">X</a>
          <form id="newToDo">
            <h3>NEW TO DO</h3>
            TO DO NAME: <input name="todoname" type="text" placeholder="Name" required>
            Description:
            <textarea name="description" rows="4" cols="45" placeholder="Description">
            </textarea>
            Deadline:
            <input name="deadline" type="text" placeholder="dd.mm.yyyy">
            Priority rate:
            <select name="priorityrate">
              <option name="priorityrate" value="1">1</option>
              <option name="priorityrate" value="2">2</option>
              <option name="priorityrate" value="3">3</option>
              <option name="priorityrate" value="4">4</option>
              <option name="priorityrate" value="5">5</option>
            </select>
            Tags:
            <div class="tagsForNewToDo">
              {% for tag in tags %}
                <input name="t" id="{{ tag.tagid }}" type="radio"><span>{{ tag.name }}</span>
                <br>
              {% endfor %}
            </div>
            <input type="button" value="Add TO DO" onclick="newTask()">
          </form>
      	</div>
      </div>

      <div id="ToDoInfo" class="modalDialog modalInfo">
          <div>
            <a class="edit" href="#edit" onclick="values()">Edit</a>
        		<a href="#close" title="Close" class="close">X</a>
            <h3>TO DO NAME</h3>
            <p>Description description description description description description description description description.</p>
            <p>Deadline: 27.11.2016</p>
            <p>Priority rate: 5</p>
            <p>Tags: Home</p>
        	</div>
      </div>
      <div id="edit" class="modalDialog">
          <div>
        		<a href="#close" title="Close" class="close">X</a>
            <form method="post" action="edittask">
              <h3>EDIT</h3>
              TO DO NAME: <input type="text" name="edittodoname">
              Description:
              <textarea name="editdescription" rows="4" cols="45" placeholder="Description">
              </textarea>
              Deadline:
              <input name="editdeadline" type="text" placeholder="dd.mm.yyyy">
              Priority rate:
              <select name="editpriorityrate">
                <option name="editpriorityrate" value="1">1</option>
                <option name="editpriorityrate" value="2">2</option>
                <option name="editpriorityrate" value="3">3</option>
                <option name="editpriorityrate" value="4">4</option>
                <option name="editpriorityrate" value="5">5</option>
              </select>
              Tags:
              <div class="tagsForNewToDo">
                {% for tag in tags %}
                  <input name="edittag" id="radio{{ tag.tagid }}" type="radio" value="{{ tag.tagid }}">{{ tag.name }}
                  <br>
                {% endfor %}
              </div>
              <input name="taskid" type="text" class="edittaskid">
              <input type="submit" value="Save">
            </form>
        	</div>
      </div>

      <div class="tasks">
        <a class="add" href="#addToDo">+</a>
        <section class="dailytaks">
          <h3>Daily N TO DOs</h3>
          <br>
          {% for task in dailytasks %}
            <div class="card p{{ task.priority }}" id="{{ task.taskid }}" data-tag="{{ task.tag }}" onclick="showInfo(this.id)">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>{{ task.name }}</b>
                <p>Priority rate: {{ task.priority }}</p>
                <input name="done" type="checkbox">DONE
              </div>
            </div>
          {% endfor %}
        </section>
        <br>
        <hr>
        <div class="othertasks">
          <h3>Other TO DOs</h3>
          <br>
          {% for task in othertasks %}
            <div class="card p{{ task.priority }}" id="{{ task.taskid }}" data-tag="{{ task.tag }}" onclick="showInfo(this.id)">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>{{ task.name }}</b>
                <p>Priority rate: {{ task.priority }}</p>
                <input name="done" type="checkbox">DONE
              </div>
            </div>
          {% endfor %}
          <noscript>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">DONE
              </div>
            </div>
            <div class="card p5">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 5</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p4">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 4</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">DONE
              </div>
            </div>
            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">DONE
              </div>
            </div>
            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">DONE
              </div>
            </div>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">DONE
              </div>
            </div>
            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p3">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 3</p>
                <input type="checkbox">DONE
              </div>
            </div>
            <div class="card p1">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 1</p>
                <input type="checkbox">DONE
              </div>
            </div>

            <div class="card p2">
              <a href="#ToDoInfo" style="color:#333333; font-size:20px;"> &#9700;</a>
              <div class="container ellipsis ellipsis">
                <b>TO DO NAME</b>
                <p>Priority rate: 2</p>
                <input type="checkbox">DONE
              </div>
            </div>

          </noscript>

        </div>
      </div>
    </div>

    <footer>
      <p>© Copyright: 2016 All rights reserved |
      Contact information: greta.gasparac@gmail.com</p>
    </footer>



  </body>
</html>
