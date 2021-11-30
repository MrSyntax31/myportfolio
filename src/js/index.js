


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


const labels = [
    'Array',
    'Functions',
    'Graphs',
    'Traversal',
    'Hashing',
    'Variables',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My growth',
        backgroundColor: 'hsl(252, 82.9%, 67.8%)',
        borderColor: 'hsl(252, 82.9%, 67.8%)',
        data: [5, 10, 5, 2, 20, 30, 45, 50],
    }]
};

const configLineChart = {
    type: 'line',
    data,
    options: {}
};


var chartLine = new Chart(
    document.getElementById('chartLine'),
    configLineChart
);


