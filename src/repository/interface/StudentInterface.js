class StudentInterface{

    constructor(){
        if(new.target === StudentInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }


    findAll(){
        throw new Error('Must be Implemented!!');
    }
    insert(){
        throw new Error('Must be Implemented!!');
    }
    update(){
        throw new Error('Must be Implemented!!');
    }

}


export default StudentInterface