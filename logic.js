<section class="container mx-auto px-6 py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <div class="bg-black border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
            <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <span class="text-slate-400">iros_core_v3.bin</span>
                <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
            </div>
            <div id="logic-terminal" class="p-6 space-y-3 h-[400px] overflow-y-auto">
                <p class="text-blue-400">[SYSTEM] Initializing Resource Scan...</p>
                </div>
        </div>

        <div>
            <h2 class="text-3xl font-bold mb-6">Conflict Resolution Logic</h2>
            <p class="text-slate-400 mb-8">When a resource conflict is detected, IROS doesn't just flag it. It executes a 3-step heuristic scan to find the path of least resistance.</p>
            
            <div class="space-y-6">
                <div class="flex gap-4 p-4 rounded-xl bg-blue-600/5 border border-blue-500/20">
                    <div class="text-blue-500 font-bold text-lg">01</div>
                    <div>
                        <h4 class="font-bold">Heuristic Mapping</h4>
                        <p class="text-sm text-slate-400">Maps staff $Skill_{Vector}$ against $Task_{Complexity}$.</p>
                    </div>
                </div>
                <div class="flex gap-4 p-4 rounded-xl bg-emerald-600/5 border border-emerald-500/20">
                    <div class="text-emerald-500 font-bold text-lg">02</div>
                    <div>
                        <h4 class="font-bold">Fatigue Delta Check</h4>
                        <p class="text-sm text-slate-400">Calculates $\Delta F$, the predicted exhaustion increase.</p>
                    </div>
                </div>
                <div class="flex gap-4 p-4 rounded-xl bg-purple-600/5 border border-purple-500/20">
                    <div class="text-purple-500 font-bold text-lg">03</div>
                    <div>
                        <h4 class="font-bold">Global Optimization</h4>
                        <p class="text-sm text-slate-400">Selects the swap with the highest $ROI_{Project}$ score.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
/**
 * IROS Crisis Mode Simulation
 * Drops available manpower by 20% and triggers the Conflict Resolution Engine
 */
function triggerCrisisSimulation() {
    console.warn("CRISIS MODE ACTIVE: Simulating 20% staff reduction...");
    const terminal = document.getElementById('logic-terminal');
    
    const crisisSteps = [
        { text: "!! WARNING: UNEXPECTED PERSONNEL SHORTAGE DETECTED !!", color: "text-rose-500 font-bold" },
        { text: "> CALCULATING: Minimum viable operational paths...", color: "text-slate-400" },
        { text: "> PRIORITY: Shifted to 'Mission Critical' tasks only.", color: "text-amber-400" },
        { text: "> RE-ALLOCATING: 14 Non-essential tasks suspended.", color: "text-blue-400" },
        { text: "> RESULT: Event stability maintained at 88% capacity.", color: "text-emerald-400 font-bold" }
    ];

    crisisSteps.forEach((step, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.className = step.color + " italic mt-2 border-l-2 border-rose-500 pl-2";
            p.innerText = step.text;
            terminal.prepend(p);
        }, index * 1000);
    });
}
