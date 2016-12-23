<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/styles/landing.css">
    <script src="./js/landing.js"></script>
    <title>DONE</title>
  </head>

  <body>
    <header class="centered-content">
      <ul>
        <li><a href="#sign" id="signin">Sign in</a></li>
        <li><a href="#register">Register</a></li>
        <li class="logo"><img src="/styles/done_logo.svg" height="50" width="130" alt=""/></li>
      </ul>
    </header>

    <div class="centered-content centered-content1">
      <div id="sign" class="modalDialog">
        <div>
      		<a href="#close" title="Close" class="close">X</a>
          <form method="post" action="/login">
            <h3>Sign in</h3>
            <label>E-mail</label>
            <input name="email" type="email" value="E-mail" onfocus="if (this.value == 'E-mail') {this.value = '';}" onblur="if (this.value == '') {this.value = 'E-mail';}"><br>
            <label>Password</label>
            <input name="password" type="password" value="Password"><br>
            <input type="submit" value="Submit">
          </form>
      	</div>
      </div>

      <div id="register" class="modalRegister modalDialog">
        <div>
      		<a href="#close" title="Close" class="close">X</a>
          <form method="post" action="/register">
            <h3>Register</h3>
            <label>First name</label>
            <input name="firstname" type="text" value="John" onfocus="if (this.value == 'John') {this.value = '';}" onblur="if (this.value == '') {this.value = 'John';}"><br>
            <label>Last name</label>
            <input name="lastname" type="text" value="Doe" onfocus="if (this.value == 'Doe') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Doe';}"><br>
            <label>E-mail</label>
            <input name="emailReg" type="email" value="E-mail" onfocus="if (this.value == 'E-mail') {this.value = '';}" onblur="if (this.value == '') {this.value = 'E-mail';}"><br>
            <label>Password</label>
            <input name="passwordReg" type="password" id="password" onchange="checkPassword()" value="Password"><br>
            <label>Repeat password</label>
            <input name="passwordRegRep" type="password" id="repeatPassword" onkeyup="checkPassword()" value="Password"><br>
            By clicking Register you agree to our Terms and Conditions and our Privacy Policy.
            <input type="submit" value="Register">
          </form>
      	</div>
      </div>

      <div class="presentation">
        <div class="quote">
          <!--<h2 style="padding=0px;">If you want to be more productive you need</h2>
          <h2 style="padding=0px;">to become the master of your minutes.</h2><br>-->
          <q>If you want to be more productive you need<br>
          to become the master of your minutes.</q><br>
          <h1>DONE will teach you how.</h1>
          <a href="#register">GET STARTED</a>
        </div>
      </div>

      <div class="additionalInfo">
        <div class="card-holder">

          <div class="card">
            <div class="container">
                <img src="/styles/calendar.svg" height=100 width=100 alt="">
                <p>Never miss a thing</p>
            </div>
          </div>
           <div class="card">
             <div class="container">
               <img src="/styles/notifications.svg" height=100 width=100 alt="">
               <p>Reminders</p>
             </div>
          </div>
           <div class="card">
             <div class="container">
               <img src="/styles/graph.svg" height=100 width=100 alt="">
               <p>Visualized productivity</p>
             </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>© Copyright: 2016 All rights reserved |
      Contact information: greta.gasparac@gmail.com</p>
    </footer>


  </body>
</html>
