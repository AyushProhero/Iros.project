/**
 * IROS Core Logic Engine v3.2.0
 * Handles real-time resource optimization simulations and UI interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("IROS Engine Initialized...");

    // 1. Initialize Efficiency Counter Animation
    animateEfficiencyStats();

    // 2. Mock Data for Live Resource Stream
    const resources = [
        { name: "Sarah Jenkins", dept: "Technical/AV", load: 75, status: "Stable" },
        { name: "Marcus V.", dept: "Hospitality", load: 92, status: "High Demand" },
        { name: "Elena Rodriguez", dept: "Logistics", load: 40, status: "Optimal" },
        { name: "David Chen", dept: "Security", load: 15, status: "Underutilized" }
    ];

    // 3. System Simulation: Auto-reallocation logic
    if (document.getElementById('optimization-log')) {
        simulateOptimization(resources);
    }
});

/**
 * Animates the ROI and Efficiency numbers on the Analytics page
 */
function animateEfficiencyStats() {
    const statElements = document.querySelectorAll('.stat-value');
    statElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        let count = 0;
        const speed = target / 100;

        const updateCount = () => {
            if (count < target) {
                count += speed;
                el.innerText = Math.ceil(count) + (el.classList.contains('percent') ? '%' : '');
                setTimeout(updateCount, 20);
            } else {
                el.innerText = target + (el.classList.contains('percent') ? '%' : '');
            }
        };
        updateCount();
    });
}

/**
 * Simulates the IROS Conflict Resolution Engine
 * Automatically suggests task swaps when a resource is overloaded (>90%)
 */
function simulateOptimization(data) {
    const log = document.getElementById('optimization-log');
    
    data.forEach(person => {
        if (person.load > 90) {
            const entry = document.createElement('div');
            entry.className = "p-3 mb-2 bg-orange-500/10 border-l-4 border-orange-500 text-xs";
            entry.innerHTML = `
                <strong>[ALERT]</strong> Fatigue Warning: ${person.name} (${person.dept}) is at ${person.load}% capacity.<br>
                <span class="text-blue-400">IROS Suggestion:</span> Re-allocate "Vendor Check-in" to Elena Rodriguez.
            `;
            log.prepend(entry);
        }
    });
}
