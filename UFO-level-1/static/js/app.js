// connect to data.js file and set it to a variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function runRefresh(tableData) {

    
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

    return tbody
};

runRefresh(tableData)

// Step 2: Filter the table data based on user's input
// Use d3 to Select the form
var form = d3.select("form");

// Create event handler and run the function below when user enters an input
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Delete all existing rows
    d3.select("tbody").selectAll("tr").remove()

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var dateForm = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = dateForm.property("value");

    //Listen to the event (input is submited) and search through the date/time column
    // to find rows that match user input.

    // Add table head
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

// Reload the original data set when the form is emptied
document.getElementsByClassName("form-control")[0].addEventListener("change", runRefresh);