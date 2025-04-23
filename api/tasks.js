export default async function handler(req, res) {
  const payload = {
    action: "list",
    first: 0,
    last: 9999,
    order: "name",
    tag: null,
    search: null,
  };

  const response = await fetch("https://training.olinfo.it/api/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  res.status(200).json(data);
}
