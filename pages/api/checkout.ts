import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import inventory from 'data/inventory.json';
const filepath = path.join(__dirname, '../../../../src/data/inventory.json');

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    try {
      const shopped = JSON.parse(req.body);
      const newInventory = inventory.map(item => {
        if(shopped[item.sku]) {
          // anything goes wrong, goes catch
          item.quantity = item.quantity - Number(shopped[item.sku]);
        }
        return item;
      })

      fs.writeFileSync(filepath, JSON.stringify(newInventory, null, 4));
      // return barcode?
      res.status(200);
      res.status(200).end();
    } catch (e) {
      res.status(422).json({ message: 'There has been an error', error: e });
    }
  } else {
    //fallback for everything
    return res.status(404).json({
      message:
        'The requested endpoint was not found or does not support this method.',
      error: 'Not found',
    });
  }
};
