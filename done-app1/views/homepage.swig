<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/landing.css">
    <script src="./js/landing.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <title>DONE</title>
  </head>

  <body>
    <div class="errors">
      {% for m in messages %}
        <p>{{ __(m) }}</p>
      {% endfor %}
    </div>
    <header class="centered-content">
      <ul>
        <li><a href="#sign" id="signin">{{ __("Sign in") }}</a></li>
        <li><a href="#register">{{ __("Register") }}</a></li>
        <li class="logo"><img src="/styles/done_logo.svg" height="50" width="130" alt=""/></li>
      </ul>
    </header>

    <div class="centered-content centered-content1">
      <div id="sign" class="modalDialog">
        <div>
      		<a href="#close" title="Close" class="close">X</a>
          <form method="post" action="/login">
            <h3>{{ __("Sign in") }}</h3>
            <label>{{ __("E-mail") }}</label>
            <input name="email" type="email" placeholder="E-mail" required><br>
            <label>{{ __("Password") }}</label>
            <input name="password" type="password" placeholder="Password" required><br>
            <input type="submit" value='{{ __("Sign in") }}'>
          </form>
      	</div>
      </div>

      <div id="register" class="modalRegister modalDialog">
        <div>
      		<a href="#" title="Close" class="close">X</a>
          <form method="post" action="/register">
            <h3>{{ __("Register") }}</h3>
            <label>{{ __("First name") }}</label>
            <input name="firstname" type="text" placeholder="John" required><br>
            <label>{{ __("Last name") }}</label>
            <input name="lastname" type="text" placeholder="Doe" required><br>
            <label>{{ __("E-mail") }}</label>
            <input name="emailReg" type="email" placeholder="E-mail" required><br>
            <label>{{ __("Password") }}</label>
            <input name="passwordReg" type="password" id="password" onchange="checkPassword()" placeholder="Password"><br>
            <label>{{ __("Repeat password") }}</label>
            <input name="passwordRegRep" type="password" id="repeatPassword" onkeyup="checkPassword()" placeholder="Password"><br>
            {{ __("By clicking Register you agree to our Terms and Conditions and our Privacy Policy.") }}
            <input type="submit" value='{{ __("Register") }}'>
          </form>
      	</div>
      </div>

      <div class="presentation">
        <div class="quote">
          <!--<h2 style="padding=0px;">If you want to be more productive you need</h2>
          <h2 style="padding=0px;">to become the master of your minutes.</h2><br>-->
          <q>If you want to be more productive you need<br>
            to become the master of your minutes.</q><br>
          <h1>{{ __("DONE will teach you how.") }}</h1>
          <a href="#register">{{ __("GET STARTED") }}</a>
        </div>
      </div>

      <div class="additionalInfo">
        <div class="card-holder">

          <div class="card">
            <div class="container">
                <img src="/styles/calendar.svg" height=100 width=100 alt="">
                <p>{{ __("Never miss a thing") }}</p>
            </div>
          </div>
           <div class="card">
             <div class="container">
               <img src="/styles/notifications.svg" height=100 width=100 alt="">
               <p>{{ __("Reminders") }}</p>
             </div>
          </div>
           <div class="card">
             <div class="container">
               <img src="/styles/graph.svg" height=100 width=100 alt="">
               <p>{{ __("Visualized productivity") }}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>© Copyright: 2016 {{ __("All rights reserved") }} |
      {{ __("Contact information") }}: greta.gasparac@gmail.com</p>
    </footer>


  </body>
</html>
