// connect to data.js file and set it to a variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append table rows `tr`
data.forEach(function(tableData) {

    // Add new rows of data for each UFO sighting
    var row = tbody.append("tr");

    // Loop through each object in the data array, keys and values to each column
    Object.entries(tableData).forEach(function([key, value]) {

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);

    });

});

// Step 2: Filter the table data based on user's input
// Use d3 to Select the form
var form = d3.select("form");

// Create event handler and run the function below when user enters an input
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Delete all existing rows
    d3.selectAll("tr").remove()

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var dateForm = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = dateForm.property("value");

    //Listen to the event (input is submited) and search through the date/time column
    // to find rows that match user input.

    var filteredData = tableData.filter(city => city.datetime === inputValue);
    console.log(filteredData);

    // Only display the filteredData in the table section
    filteredData.forEach(function(filteredData) {
  
        // Add new rows of data for each UFO sighting
        var row = tbody.append("tr");
      
        Object.entries(filteredData).forEach(function([key, value]) {
    
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);

        });
      });
};



// use index to access array items
// use push to add item to array
// use slice to return selected item of array
// use join to add items of an array into a string
// use split to turn a string into an array
// use for loop or arrow function (2.06, 2.08)
// use map to return a new array (2.05, 2.08)
// use forEach to loop through an array and log each time (2.05)
// use math operations
// use filter (2.10)
// --------------
// us d3.select id or class, .text to modify text,. attr to get html, change href,
// Select all list items, then change their font color
// d3.selectAll("li").style("color", "blue");     change style
// var li2 = d3.select("ul").append("li").text("Another new item!"); (3.01)
//d3.select("table")   select table
// add items to table (3.02, 3.03)
// var inputText = d3.event.target.value; handle events (3.05)




