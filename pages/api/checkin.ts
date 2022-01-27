import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import inventory from 'data/inventory.json';
import packages from 'data/packages.json';
const filepath = path.join(__dirname, '../../../../src/data/inventory.json');

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    try {
      const shopped = JSON.parse(req.body);
      const shoppedItems = Object.keys(shopped).map(name => {
        const bundle = packages.find(p => p.id === name);
        const quantity = Number(shopped[name]);
        return bundle.items.map(item => ({
          sku: item,
          quantity,
        }));
      });

      const newInventory = inventory.map(item => {
        shoppedItems.forEach(arr => {
          const match = arr.find(a => a.sku);
          if (match) {
            item.quantity = item.quantity + Number(match.quantity);
          }
        })
        return item;
      })
      fs.writeFileSync(filepath, JSON.stringify(newInventory, null, 4));
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
