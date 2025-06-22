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

    try {
      const res = await fetch("http://localhost:5000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ program, average })
      });

      const data = await res.json();
      console.log("RAW response from Flask:", data);

      if (data.error) {
        alert("Error: " + data.error);
      } else if (data.output) {
        localStorage.setItem("uniResults", data.output);
        window.location.replace("Results.html");
      } else {
        alert("Unexpected error. No data returned.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Could not contact server.");
    }
  });
});