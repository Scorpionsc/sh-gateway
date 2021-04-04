// import express from 'express';
import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { HomeController } from './controller/home-controller.js';
import { SugarCollectorController } from './controller/sugar-colector-controller.js';
// import SugarCollector from './services/SugarCollectorData.js';
dotenv.config();
const port = process.env.PORT;
// const app = express();
const app = createExpressServer({
    controllers: [SugarCollectorController, HomeController],
    cors: true
});
// app.get('/sugar-collector', async (req, res) => {
//   const sugarCollector = SugarCollector.instance;
//   const lastEntry = await sugarCollector.getLastEntry();
//
//   const loopData = await sugarCollector.getLoopData();
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//   res.send({
//     lastEntry,
//     loopData
//   });
// });
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map