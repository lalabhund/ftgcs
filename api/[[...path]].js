export default function handler(req, res) {
  const { path = [] } = req.query;

  if (path.length === 0) {
    return res.status(400).send("No URL provided.");
  }

  const target = 'https://' + path.join('/');

  return res.redirect(301, target);
}
