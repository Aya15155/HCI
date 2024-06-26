const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function login() 
{
  var myParams = {
    'clientid' : '306813547379-5b3bms5lupakn2behfh5hks0p5f54mq1.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback',
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
}

function loginCallback(result)
{
    if(result['status']['signed_in'])
    {
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp)
        {
            /* console.log(resp);
            console.log(resp['id']); */
            var email = '';
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];//here is required email id
                    }
                }
            }
           var usersname = resp['displayName'];//required name
        });
    }
}
function onLoadCallback()
{
    gapi.client.setApiKey('AIzaSyAt5HsEWiZRBrZw3CbRhinUZBVlKg7n40k');
    gapi.client.load('plus', 'v1',function(){});
}




      (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     })();


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '306813547379-5b3bms5lupakn2behfh5hks0p5f54mq1',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});
 // Form submission handler for login
 document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'User@gmail.com' && password === '123') {
      console.log('Redirecting to user.html');
      window.location.href = '/html/user.html'; // Redirect to user's page
  } else if (email === 'librarian@gmail.com' && password === '123') {
      console.log('Redirecting to librarianPage.html');
      window.location.href = '/html/Dashboard_librarian.html'; // Redirect to librarian's page
  } else if (email === 'admin@gmail.com' && password === '123') {
      console.log('Redirecting to adminPage.html');
      window.location.href = '/html/Dashboard_admin.html'; // Redirect to admin's page
  } else {
      alert('Invalid email or password'); // Display error message
  }
});

// Form submission handler for create account
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('createEmail').value;
  const password = document.getElementById('createPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }

  // Add logic for creating an account, such as sending data to the server
  console.log('Account created for:', username, email);
  alert('Account successfully created!');
  showLogin();
});
