/* SITE_NAME (placeholder — find-replace): Broadwater AI Co. */
(function () {
  var SITE_NAME = "Broadwater AI Co.";
  var EMAIL = "damienmueller@gmail.com";
  var form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    var name = (form.elements.namedItem("Name") || {}).value || "";
    var email = (form.elements.namedItem("Email") || {}).value || "";
    var message = (form.elements.namedItem("Message") || {}).value || "";
    var subject = encodeURIComponent(SITE_NAME + " enquiry" + (name ? " — " + name : ""));
    var body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    );
    e.preventDefault();
    window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
  });
})();
