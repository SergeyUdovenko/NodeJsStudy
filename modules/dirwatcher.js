const fs = require('fs');
const EventEmitter = require('events');

export class Dirwatcher extends EventEmitter {
    constructor(){
        super();
        this.filesList = {};
    }

    watch(path, delay) {
        const self = this;
        this.path = path;
        this.delay = delay;
        let filesArr = [];
        let newItemsList = [];
        fs.readdir(path, (err, files) => {
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
            if(Object.keys(self.filesList).some( key => self.filesList[key] === 'new' )) {
                newItemsList = Object.keys(self.filesList).filter( val => self.filesList[val] === 'new').map( val => {
                    return `${self.path}/${val}`;
                });
                
                this.emit('changed' , newItemsList)
            }
            //console.log(self.filesList);

        })
        setTimeout( () => {
            this.watch(this.path, this.delay)
        } ,delay)

        return this;
    }
}