import * as config from './config/config.json';
import { User, Product } from './models';
import * as modules from './modules';

console.log(config.name);
const user = new User();
const product = new Product();

const dirwatcher = new modules.Dirwatcher();
const importer = new modules.Importer('./data');

//dirwatcher.watch('./data', 3000)
  //.on('changed', (filePath, item) => importer.import(filePath))
  //.on('error', err => console.log(`Error emitted: ${err.message}`));

//importer.dirWatchListener();
