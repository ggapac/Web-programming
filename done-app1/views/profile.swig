<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <script src="./js/landing.js" defer></script>
    <script src="./js/preferences.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <title>DONE</title>
  </head>

  <body>
    <div class="errors">
      {% for m in messages %}
        <p>{{ m }}</p>
      {% endfor %}
    </div>
    <header>
      <label for="show-menu" class="show-menu"><img src="/styles/done_logo.svg" class="logo1" height="50" width="130" alt=""/></label>
      <input type="checkbox" id="show-menu">
      <nav>
        <a href="/"><img src="/styles/done_logo.svg" class="logo" height="50" width="130" alt=""/></a>
        <ul id="menu">
          <li><a href="/">{{ __("TO DOs") }}</a></li>
          <li><a href="/dones">{{ __("DONEs") }}</a></li>
          <li><a href="/productivity">{{ __("Productivity") }}</a></li>
          <li class="drop">
            <input id="check02" type="checkbox" name="menu"/>
            <label for="check02" id="active">{{ __("Profile") }} &#9662;</label>
            <ul class="submenu">
              <li><a href="/profile">{{ __("View Profile") }}</a></li>
              <li><a href="/admin">{{ __("Admin") }}</a></li>
              <li><a href="/logout">{{ __("Log out") }}</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div id="editProfile" class="modalDialog modalProfileInfo">
      <div>
        <a href="#" title="Close" class="close">X</a>
        <form id="editProfile" method="post" action="/editprofile">
          <h3>{{ __("Edit profile info") }}</h3>
          {{ __("FIRST NAME") }}:<input type="text" name="editfirstname" value="{{ user.firstname }}">
          {{ __("LAST NAME") }}:<input type="text" name="editlastname" value="{{ user.lastname }}">
          {{ __("E-MAIL") }}:<input type="email" name="editemail" value="{{ user.email }}">
          <input type="submit" value='{{ __("Save") }}'>
        </form>
      </div>
    </div>

    <div class="wrapper">
      <section class="infoCard">
        <a class="edit" href="#editProfile">{{ __("Edit") }}</a>
        <h3>{{ __("INFO") }}</h3>
        <div class="infoProfile">
          <table class="infoUser">
            <tr>
              <th>{{ __("FIRST NAME") }}:</th>
              <th>{{ user.firstname }}</th>
            </tr>
            <tr>
              <th>{{ __("LAST NAME") }}:</th>
              <th>{{ user.lastname }}</th>
            </tr>
            <tr>
              <th>{{ __("E-MAIL") }}:</th>
              <th>{{ user.email }}</th>
            </tr>
            <tr>
              <th>{{ __("PRODUCTIVITY POINTS") }}:</th>
              <th>{{ user.productivitypts }}</th>
            </tr>
            <tr>
              <th>{{ __("NUMBER OF TO DOs") }}:</th>
              <th>{{ user.todos }}</th>
            </tr>
            <tr>
              <th>{{ __("NUMBER OF DONEs") }}:</th>
              <th>{{ user.dones }}</th>
            </tr>
          </table>
          <br>

        </div>
      </section>

      <section class="infoCardPref">
        <h3>{{ __("PREFERENCES") }}</h3>
        <div class="infoProfile">
          <div class="choice">
            {{ __("Let DONE pick daily tasks for you") }}
            <br>
            <span>{{ __("Number of tasks per day:") }}<span>
            <br>
            <select id="perday">

            {% for i in [0, 1, 2, 3, 4, 5, 6, 7, 8] %}
              {% if i == user.tasksperday %}
                <option value="{{ i }}" selected>{{ i }}</option>
              {% else %}
                <option value="{{ i }}">{{ i }}</option>
              {% endif %}
            {% endfor %}
            </select>
          </div>
        </div>
        <a class="edit" id="savepref" href="#preferences" style="margin-top:-38px;">{{ __("Save") }}</a>
      </section>
    </div>

    <footer>
      <p>© Copyright: 2016 {{ __("All rights reserved") }} |
      {{ __("Contact information") }}: greta.gasparac@gmail.com</p>
    </footer>



  </body>

</html>
