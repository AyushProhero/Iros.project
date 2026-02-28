/**
 * IROS Advanced Logic Visualization
 * Simulates a decision-making process for resource re-allocation
 */

const terminal = document.getElementById('logic-terminal');

const logicSteps = [
    { text: "> SCANNING: Hall A - Technical Setup", color: "text-slate-300" },
    { text: "> CONFLICT DETECTED: Resource 'James W.' double-booked", color: "text-rose-400 font-bold" },
    { text: "> ANALYZING: Skill adjacency for James W. (Network Eng.)", color: "text-slate-400" },
    { text: "> SEARCHING: Secondary Resource with Core_Skill >= 0.85", color: "text-slate-400" },
    { text: "> MATCH FOUND: Sarah K. (IT Specialist) - Availability: 100%", color: "text-emerald-400" },
    { text: "> CALCULATING: Project ROI Delta...", color: "text-slate-400" },
    { text: "> SUCCESS: Swap proposed. Efficiency gain: +12%", color: "text-blue-400 font-bold" },
    { text: "------------------------------------------------", color: "text-slate-700" }
];

let stepIndex = 0;

function typeLogic() {
    if (stepIndex < logicSteps.length) {
        const p = document.createElement('p');
        p.className = logicSteps[stepIndex].color + " opacity-0 transition-opacity duration-500";
        p.innerText = logicSteps[stepIndex].text;
        terminal.appendChild(p);
        
        // Trigger fade-in
        setTimeout(() => p.classList.remove('opacity-0'), 50);
        
        stepIndex++;
        setTimeout(typeLogic, 1200); // Delay between steps
    } else {
        // Reset after a pause to keep the demo looping
        setTimeout(() => {
            terminal.innerHTML = "";
            stepIndex = 0;
            typeLogic();
        }, 5000);
    }
}

// Start the simulation
typeLogic();
