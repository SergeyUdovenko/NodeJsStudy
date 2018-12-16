const fs = require('fs');
const EventEmitter = require('events');
const csv = require('csvtojson');

class DirwatchEvent extends EventEmitter {};

export const dirwatch = new DirwatchEvent()

export class Dirwatcher {
    constructor(path, delay){
        this.path = path;
        this.delay = delay;
        this.filesList = {};
        this.watch();
    }

    watch(path, delay = this.delay) {
        const self = this;
        let filesArr = [];
        let newItemsList = [];
        fs.readdir(this.path, (err, files) => {
            filesArr = files.map( file => {

                if ( Object.keys(self.filesList).some( key => key === file ) ) {
                    self.filesList[file] = "old"
                } else {
                    self.filesList[file] = "new"
                }

                return file;

            });

            Object.keys(self.filesList).forEach( key  => {
                if( !filesArr.some( el => el === key) ) {
                    delete self.filesList[key];
                } 
            })

            newItemsList = Object.keys(self.filesList).filter( val => self.filesList[val] === 'new')

            Object.keys(self.filesList).some( key => self.filesList[key] === 'new' ) && dirwatch.emit('changed' , newItemsList) ;
            

            //console.log(self.filesList);

        })
        setInterval( () => {
            this.watch()
        } ,delay)
    }
}