// Handle Registration Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
      registerForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent default form submission

          // Get input values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Store user details in localStorage (temporary storage)
          localStorage.setItem("user", JSON.stringify({ name, email, password }));

          alert("Registration successful! Redirecting to login page...");
          window.location.href = "login.html"; // Redirect to login page
      });
  }

  // Handle Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent default form submission

          // Get input values
          const loginEmail = document.getElementById("loginEmail").value;
          const loginPassword = document.getElementById("loginPassword").value;

          // Retrieve stored user details
          const storedUser = JSON.parse(localStorage.getItem("user"));

          if (storedUser && loginEmail === storedUser.email && loginPassword === storedUser.password) {
              alert("Login successful! Redirecting...");
              window.location.href = "dashboard.html"; // Redirect to dashboard
          } else {
              alert("Invalid email or password. Please try again.");
          }
      });
  }
});
