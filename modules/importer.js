import { Dirwatcher } from './dirwatcher';
const fs = require('fs');
const csv = require('csvtojson');


export class Importer {
    constructor( ){
        this.dirwatcher = new Dirwatcher();
    }

    import(path){
        const promise = new Promise(function(resolve, reject){
            path.forEach(path => {
                csv()
                .fromFile(path)
                .then((jsonObj)=>{
                    console.log(jsonObj)
                });
                
            });
        });
        return promise;
    }

    importSync(path) {
        path.forEach(path => {
            csv()
            .fromFile(path)
            .then((jsonObj)=>{
                console.log(jsonObj)
            });
            
        });
    }

}