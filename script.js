// Function to load HTML components
function loadHTML(componentId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

// Load header, main body, and footer
loadHTML("header", "header.html");
loadHTML("main", "body.html");
loadHTML("footer", "footer.html");
