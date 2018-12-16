import { dirwatch } from './dirwatcher';
const fs = require('fs');
const csv = require('csvtojson');


export class Importer {
    constructor( path ){
        this.path = path;
        this.dirwatcher = dirwatch;
        this.resultObject = {};
    }

    import(path = this.path){
        const self = this;
        const files = fs.readdirSync(path);
        const promise = new Promise(function(resolve, reject){
            files.forEach(element => {
                const pathToFile = `${path}/${element}`
                csv()
                .fromFile(pathToFile)
                .then((jsonObj)=>{
                    self.resultObject[element] = jsonObj;
                    resolve(jsonObj)
                }).then( (jsonObj) =>{
                    resolve(jsonObj);
                });
                
            });
        }).then( (data) => {
            console.log(data)
        });
        return promise;
    }

    importSync(path = this.path) {
        const self = this;
        const files = fs.readdirSync(path)
        files.forEach(element => {
            const pathToFile = `${path}/${element}`
            csv()
            .fromFile(pathToFile)
            .then((jsonObj)=>{
                self.resultObject[element] = jsonObj;
                console.log(jsonObj);
            });
        });
        
    }

    dirWatchListener() {
        const self = this;
       

        self.dirwatcher.on('changed', (data) => {
            data.forEach(element => {
                const pathToFile = `${self.path}/${element}`
                csv()
                .fromFile(pathToFile)
                .then((jsonObj)=>{
                    self.resultObject[element] = jsonObj;
                    console.log(jsonObj);
                })
            });
        });
    }

}