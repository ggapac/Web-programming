<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <script src="./js/preferences.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <title>DONE</title>
  </head>

  <body>
    <header>
      <label for="show-menu" class="show-menu"><img src="/styles/done_logo.svg" class="logo1" height="50" width="130" alt=""/></label>
      <input type="checkbox" id="show-menu">
      <nav>
        <a href="/"><img src="/styles/done_logo.svg" class="logo" height="50" width="130" alt=""/></a>
        <ul id="menu">
          <li><a href="/">TO DOs</a></li>
          <li><a href="/dones">DONEs</a></li>
          <li><a href="/productivity">Productivity</a></li>
          <li class="drop">
            <input id="check02" type="checkbox" name="menu"/>
            <label for="check02" id="active">Profile &#9662;</label>
            <ul class="submenu">
              <li><a href="/profile">View Profile</a></li>
              <li><a href="/logout">Log out</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div id="editProfile" class="modalDialog modalProfileInfo">
      <div>
        <a href="#" title="Close" class="close">X</a>
        <form id="editProfile" method="post" action="/editprofile">
          <h3>Edit profile info</h3>
          FIRST NAME: <input type="text" name="editfirstname" value="{{ user.firstname }}">
          LAST NAME: <input type="text" name="editlastname" value="{{ user.lastname }}">
          E-MAIL: <input type="email" name="editemail" value="{{ user.email }}">
          <input type="submit" value="Save">
        </form>
      </div>
    </div>

    <div class="wrapper">
      <section class="infoCard">
        <a class="edit" href="#editProfile">Edit</a>
        <h3>INFO</h3>
        <div class="infoProfile">
          <table class="infoUser">
            <tr>
              <th>FIRST NAME:</th>
              <th>{{ user.firstname }}</th>
            </tr>
            <tr>
              <th>LAST NAME:</th>
              <th>{{ user.lastname }}</th>
            </tr>
            <tr>
              <th>E-MAIL:</th>
              <th>{{ user.email }}</th>
            </tr>
            <tr>
              <th>PRODUCTIVITY POINTS:</th>
              <th>{{ user.productivitypts }}</th>
            </tr>
            <tr>
              <th>NUMBER OF TO DOs:</th>
              <th>{{ user.todos }}</th>
            </tr>
            <tr>
              <th>NUMBER OF DONEs:</th>
              <th>{{ user.dones }}</th>
            </tr>
          </table>
          <br>

        </div>
      </section>

      <section class="infoCardPref">
        <h3>PREFERENCES</h3>
        <div class="infoProfile">
          <div class="choice">
            Let DONE pick daily tasks for you
            <br>
            Number of tasks per day:
            <select id="perday">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
        <a class="edit" id="savepref" href="#preferences" style="margin-top:-38px;">Save</a>
      </section>
    </div>

    <footer>
      <p>© Copyright: 2016 All rights reserved |
      Contact information: greta.gasparac@gmail.com</p>
    </footer>



  </body>

</html>
