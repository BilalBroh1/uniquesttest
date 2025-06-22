function showScreen(page) {
  window.location.replace(page);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const program = document.getElementById("interest").value;
    const grades = [];
    for (let i = 1; i <= 6; i++) {
      grades.push(document.getElementById(`Course${i}Grade`).value);
    }

    const cleanGrades = grades.map(g => parseFloat(g) || 0);
    const average = Math.round(cleanGrades.reduce((a, b) => a + b, 0) / cleanGrades.length);

    const results = [];
    sampleData.forEach(u => {
      u.programs.forEach(p => {
        if (p.name.toLowerCase().includes(program.toLowerCase()) && average >= p.minGrade) {
          results.push({
            university: u.name,
            program: p.name,
            estimated_cutoff: p.minGrade,
            details: {
              tuition: p.tuition,
              scholarships: p.scholarships,
              pros: p.pros.map(pt => ({ point: pt })),
              cons: p.cons.map(pt => ({ point: pt }))
            }
          });
        }
      });
    });

    localStorage.setItem("uniResults", JSON.stringify({ results }));
    window.location.replace("Results.html");
  });
});
