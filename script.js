// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Pie chart for waste composition
const ctx = document.getElementById('wasteChart').getContext('2d');
const wasteChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Plastic', 'Paper', 'Glass', 'Metal', 'Organic', 'Other'],
        datasets: [{
            label: 'Waste Composition',
            data: [35, 25, 15, 10, 10, 5],
            backgroundColor: [
                '#4CAF50',
                '#8BC34A',
                '#CDDC39',
                '#2E7D32',
                '#1B5E20',
                '#AED581'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Community Waste Composition',
                font: {
                    size: 16
                }
            }
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
