export default async function handler(req, res) {
  const { username } = req.query;

  const response = await fetch("https://training.olinfo.it/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "get", username }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
