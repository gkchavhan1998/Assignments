function signIn() {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  var form = document.createElement("form");
  form.setAttribute("method", "GET");
  form.setAttribute("action", oauth2Endpoint);
  var params = {
    client_id:
      "367057881503-om4j85llqmqf4utv6uos4ru088kbj8cp.apps.googleusercontent.com",
    redirect_uri: "http://127.0.0.1:5500/profile.html",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    include_granted_scopes: "true",
    state: "pass-through value",
  };
  for (var p in params) {
    var input = document.createElement("input");
    console.log("p", p);
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}
