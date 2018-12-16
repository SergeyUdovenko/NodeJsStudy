import * as config from './config/config.json';
import { User, Product } from './models';
import { Dirwatcher, Importer } from './modules';

console.log(config.name);
const user = new User();
const product = new Product();

const dirwatcher = new Dirwatcher('./data', 10000);
const importer = new Importer('./data');

importer.dirWatchListener();
