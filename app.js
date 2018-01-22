const fs=require('fs');
const _=require('lodash');
const yargs = require('yargs');

const notes=require('./notes.js');
var titleOptions={
    describe:'Title of note',
    demand:true,
    alias:'t'
};
var bodyOptions={
    describe:'Body of note',
    demand:true,
    alias:'b'
};

const argv = yargs.command('add','Add a new note',{
    title:titleOptions,
    body:bodyOptions
})
.command('list','List all notes')
.command('read','read a note',{
    title:titleOptions
})
.command('remove','remove a note',{
    title:titleOptions
})
.help()
.argv;

var command=process.argv[2];
// console.log('Command:',command);
// console.log('yargs',argv);

if(command=='add'){
    var note=notes.addNote(argv.title,argv.body);
    if(note){
        console.log("New note added");
        notes.logNote(note);
    }
    else{
        console.log("note already exists");
    }
}
else if(command=='list'){
  var getAll=notes.getAll();
  console.log(`printing ${getAll.length} note(s)`);
  getAll.forEach((note) =>notes.logNote(note) );
    
}
else if(command=='read'){
    var getNote=notes.getNote(argv.title);
    if(getNote){
        console.log("Getting Note Details");
        notes.logNote(getNote);
    }
    else{
        console.log("Requested note not found");
    }
    
}
else if(command=='remove'){
    var noteRemoved=notes.removeNote(argv.title);
    var message=noteRemoved?'Note Removed':'Note not found';
    console.log(message);
}
else{
    console.log("command not entered");
}

