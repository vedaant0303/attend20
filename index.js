// Function to get the query parameter value from the URL
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Use the function to retrieve the "name" parameter from the URL
var name = getQueryParam('name');
document.getElementById('teacherName').textContent = name;
