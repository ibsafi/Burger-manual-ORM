// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoure-burger").on("click", function(event) {
    var id = $(this).data("id");


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(
      function() {
        console.log("changed burger("+ id +") to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".add-burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: { burger_name: $("#burger-name").val().trim()}
    }).then(
      function() {
        console.log("created new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
