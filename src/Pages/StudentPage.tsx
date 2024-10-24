import { useState } from "react";
import { StudentInterface } from "../Interfaces/StudentsInterface";


const StudtentPage = () => {
    const [students, setStudents] = useState<StudentInterface>();
    
    return ( 
        <h1>Students</h1>
    );
}

export default StudtentPage;