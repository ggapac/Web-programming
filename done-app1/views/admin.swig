<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <link rel="stylesheet" type="text/css" href="/styles/admin.css">
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
          <li><a href="/" id="active">{{ __("TO DOs") }}</a></li>
          <li><a href="/dones">{{ __("DONEs") }}</a></li>
          <li><a href="/productivity">{{ __("Productivity") }}</a></li>
          <li class="drop">
            <input id="check02" type="checkbox" name="menu"/>
            <label for="check02">{{ __("Profile") }} &#9662;</label>
            <ul class="submenu">
              <li><a href="/profile">{{ __("View Profile") }}</a></li>
              {% if admin == 1 %}
                <li><a href="/admin">{{ __("Admin panel") }}</a></li>
              {% endif %}
              <li><a href="/logout">{{ __("Log out") }}</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div class="wrapper">
      <h3>{{ __("USERS") }}: {{ users.length }}</h3>

      <table class="users">
        <thead>
          <tr>
            <td>{{ __("First name") }}</td>
            <td>{{ __("Last name") }}</td>
            <td>{{ __("E-mail") }}</td>
            <td>{{ __("Register date") }}</td>
          </tr>
        </thead>
        <tbody>
          {% for user in users %}
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.createdAt }}</td>
          {% endfor %}
        </tbody>
      </table>
    </div>

  </body>

</html>
