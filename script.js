// Capture the form submission event
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Retrieve values from form fields
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  
  // Create an object with the blog post data
  const blogPost = {
    username: username,
    title: title,
    content: content
  };
  
  // Convert the object to a JSON string
  const blogPostJSON = JSON.stringify(blogPost);
  
  // Store the JSON string in localStorage
  localStorage.setItem('blogPost', blogPostJSON);
  
  // Redirect to the posts page or perform any other action
  window.location.href = "posts.html";

});