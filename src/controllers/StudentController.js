import StudentService from "../services/StudentService.js";
class StudentController {

    constructor() {
        this.studentService = new StudentService();
    }

    getAllUsers(req, res){
        const studentService = this.studentService.getAll()
        return res.send(studentService)
    }
}

export default StudentController