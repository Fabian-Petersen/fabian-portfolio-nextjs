// Client-side function to trigger the submission
async function submitData() {
  const clientData = {
    title: "Example Title",
    description: "Example Description",
  };
  await fetch("/api/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clientData),
  });
}
