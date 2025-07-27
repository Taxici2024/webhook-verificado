export default function handler(req, res) {
  const VERIFY_TOKEN = 'taxici_token_2025_2';

  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN && mode === 'subscribe') {
      console.log('WEBHOOK_VERIFICADO');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }

  } else if (req.method === 'POST') {
    console.log('Mensaje recibido:', JSON.stringify(req.body, null, 2));

    if (req.body.object) {
      res.status(200).send('EVENT_RECEIVED');
    } else {
      res.sendStatus(404);
    }

  } else {
    res.sendStatus(405);
  }
}
