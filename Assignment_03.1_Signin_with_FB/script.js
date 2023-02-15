$(document).ready(function () {
  //login
  $("#login").click(function () {
    facebookLogin();
  });

  function facebookLogin() {
    FB.getLoginStatus(function (response) {
      //   console.log("login response", response);
      statusChangeCallback(response);
    });
  }
  //logout
  $("#logout").click(function () {
    $("#logout").hide();
    $("#login").show();
    facebookLogout();
  });

  function facebookLogout() {
    FB.logout(function (response) {
      //   console.log("logout status", response);
      //   statusChangeCallback(response);
    });
  }

  //--------------------------------------------------------------------------------

  function statusChangeCallback(response) {
    // console.log("statusChangeCallback");
    // console.log("statuschange response", response);
    if (response.status === "connected") {
      $("#login").hide();
      $("#logout").show();
      fetchUserProfile();
      //   testAPI();
    } else {
      facebookLoginByDialog();
    }
  }

  function fetchUserProfile() {
    FB.api("/me?fields=id,name,email", function (response) {
      //   console.log(response);
      console.log(response.name);
      console.log(response.email);
    });
  }

  function facebookLoginByDialog() {
    FB.login(
      function (response) {
        statusChangeCallback(response);
      },
      { scope: "public_profile, email" }
    );
  }
});
