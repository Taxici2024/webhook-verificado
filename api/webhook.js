
export default function handler(req, res) {
  if (req.method === 'GET') {
    const verify_token = 'taxici_token_2025_2';
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === verify_token) {
      console.log('WEBHOOK_VERIFICADO');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } else if (req.method === 'POST') {
    console.log('MENSAJE ENTRANTE:', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  } else {
    res.sendStatus(405);
  }
}
