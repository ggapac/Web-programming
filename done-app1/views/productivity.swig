<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/app.css">
    <script type="text/javascript" src="./js/fusioncharts.js"></script>
    <script type="text/javascript" src="./js/fusion.charts.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <script src="./js/productivity.js" defer></script>
    <title>DONE</title>
  </head>

  <body>
    <header>
      <label for="show-menu" class="show-menu"><img src="/styles/done_logo.svg" class="logo1" height="50" width="130" alt=""/></label>
      <input type="checkbox" id="show-menu"/>
      <nav>
        <a href="/"><img src="/styles/done_logo.svg" class="logo" height="50" width="130" alt=""/></a>
        <ul id="menu">
          <li><a href="/">{{ __("TO DOs") }}</a></li>
          <li><a href="/dones">{{ __("DONEs") }}</a></li>
          <li><a href="/productivity" id="active">{{ __("Productivity") }}</a></li>
          <li class="drop">
            <input id="check02" type="checkbox" name="menu"/>
            <label for="check02">{{ __("Profile") }} &#9662;</label>
            <ul class="submenu">
              <li><a href="/profile">{{ __("View Profile") }}</a></li>
              {% if admin == 1 %}
                <li><a href="/admin">{{ __("Admin") }}</a></li>
              {% endif %}
              <li><a href="/logout">{{ __("Log out") }}</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div class="wrapper">

      <div class="tagsmobile">
        <label for="show-tags" class="show-tags">
          {{ __("TIME PERIOD") }} &#9662;
        </label>
        <input class="hidecheckbox" type="checkbox" id="show-tags">
        <ul id="tags">
          <li><input type="radio" id="time0" name="timeperiod" checked><span>{{ __("All") }}</span></li>
          <li><input type="radio" id="time0" name="timeperiod"><span>{{ __("Current month") }}</span></li>
        </ul>
      </div>

      <aside class="tags">
        <h3>{{ __("TIME PERIOD") }}</h3>
        <ul>
          <li><input type="radio" id="time0" name="timeperiod" checked><span>{{ __("All") }}</span></li>
          <li><input type="radio" id="time1" name="timeperiod"><span>{{ __("Current month") }}</span></li>
        </ul>
      </aside>

      <section class="tasks">
        <h3>{{ __("STATISTICS FOR CHOSEN TIME PERIOD") }}:</h3>
        <br>
        <!--<div class="graph" id="graph">
          <noscript>
            <img src="./css/graph.png" style="width:100%, height=100%;" alt="">
          </noscript>
          <canvas id="myCanvas" width="600" height="350"></canvas>
        </div>
        <br>
        <br>-->
        <div id="chart-container">FusionCharts will render here</div>
        <br>
        <br>
        <div class="statistics">
          <table>
            <tr>
              <td>{{ __("NUMBER OF TO DOs") }}:</td>
              <td id="todos"></td>
            </tr>
            <tr>
              <td>{{ __("NUMBER OF DONEs") }}:</td>
              <td id="dones"></td>
            </tr>
          </table>
        </div>
      </section>
    </div>
    <footer>
      <p>© Copyright: 2016 {{ __("All rights reserved") }} |
      {{ __("Contact information") }}: greta.gasparac@gmail.com</p>
    </footer>

  </body>
</html>
