//1) import node core modules

const fs =require('fs');
fs.writeFileSync('notes.txt','Hello');
console.log(fs.readFileSync('notes.txt').toString()) ;
fs.appendFileSync('notes.txt','data to append');


//2) import your own file
// const m = require ('./data');
// console.log(m);

// const validator = require('validator');
// console.log(validator.isEmail('roro@gmail.com'));



// const chalk = require('chalk');
// console.log(chalk.green.bold('success')+' '+chalk.blue('success')+' '+chalk.green('success'));
// console.log(chalk.red.bold('Error'));

//////////////////////

console.log(process.argv);
// const command=process.argv[2];
// if (command=='add'){
//     console.log('add item');
// }
// else if(command=='delete'){
//     console.log('delete item');
// }
// else{
//     console.log('unknown');

// }

///////////////////
// const yargs = require('yargs');
// yargs.command({
//     command:'add',
//     describe:'add note',
//     handler:function(){
//         console.log('note has been added');
//     }
// })
// yargs.command({
//     command:'read',
//     describe:'read note',
//     handler:function(){
//         console.log('note has been read');
//     }
// })
// yargs.command({
//     command:'list',
//     describe:'list note',
//     handler:function(){
//         console.log('note has been listed');
//     }
// })
// yargs.command({
//     command:'delete',
//     describe:'deleted note',
//     handler:function(){
//         console.log('note has been deleted');
//     }
// })
 const yargs = require('yargs');

yargs.command({
        command:'add',
        describe:'added note',
        builder:{
            title:{
                describe:'title of note to be added',
                type:'string'
            },
            body:{
                describe:'body of note to be added',
                demandOption:true,
                type:'string'
            }
        },
        handler:function(argv){
            console.log('title is', argv.title)
            console.log('title is', argv.body)
           // console.log('note has been added');
        }
    })
    yargs.command({
        command:'delete',
        describe:'deleted note',
        builder:{
            title:{
                describe:'title of note to be deleted',
                type:'string'
            }
            
        },
        handler:function(argv){
            console.log('title is', argv.title)
            console.log('title is', argv.body)
           // console.log('note has been deleted');
        }
    })
    yargs.command({
        command:'read',
        describe:'read note',
        builder:{
            title:{
                describe:'title of note to be read',
                type:'string'
            }
            
        },
        handler:function(argv){
            console.log('title is', argv.title)
            console.log('title is', argv.body)
           // console.log('note has been read');
        }
    })
    yargs.command({
        command:'list',
        describe:'listed note',
        
        handler:function(argv){
            console.log('note has been listed');
        }
    })
   console.log(yargs.argv);
 yargs.parse();
//console.log(yargs.argv);