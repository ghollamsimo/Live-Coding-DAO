import StudentRepository from '../repository/implementation/StudentRepository.js'
class StudentService{
    constructor() {
        this.studentRepository = new StudentRepository()
    }
    getAll(){
        return this.studentRepository.findAll()
    }
}

export default StudentService
