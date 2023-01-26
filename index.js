const  winston  =  require ( 'winston' ) ;

const  logger  =  winston.createLogger({ 
level : 'debug' , 
format : winston . format . json () , 
defaultMeta : {  service : 'user-service'  } , 
transports : [ 
    
    new  winston.transports.Console(),
    new  winston.transports .File ( { filename : 'error.log' ,  level : 'error'  } ) , 
    new  winston.transports.File ( { filename: 'combined.log'  } ) , 
    ] , 
});




//////////////

const miFunction = val => {
    if(typeof val === "number") {
        return 2 + val
    }
    throw new Error("El valor debe ser tipo número")
}












