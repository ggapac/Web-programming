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
      <h3>USERS: 2</h3>

      <table class="users">
        <thead>
          <tr>
            <td>First name</td>
            <td>Last name</td>
            <td>E-mail</td>
            <td>TO DOs</td>
            <td>DONEs</td>
            <td>Join date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Greta</td>
            <td>Gasparac</td>
            <td>greta.gasparac@gmail.com</td>
            <td>12</td>
            <td>10</td>
            <td>12.01.2017</td>
          </tr>
          <tr>
            <td>Greta</td>
            <td>Gasparac</td>
            <td>greta.gasparac@gmail.com</td>
            <td>12</td>
            <td>10</td>
            <td>12.01.2017</td>
          </tr>
        </tbody>
      </table>
    </div>

  </body>

</html>
