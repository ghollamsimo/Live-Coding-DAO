import StudentInterface  from '../interface/StudentInterface.js'
import {students} from '../../db.mjs'
class StudentRepository extends StudentInterface{
     findAll() {
        return students
    }
}

export default StudentRepository