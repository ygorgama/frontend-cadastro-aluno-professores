import { useEffect, useState } from "react";
import BoxButtonNavigation from "../Components/BoxButtonNavigation/BoxButtonNavigation";
import ButtonNavigation from "../Components/ButtonNavigation/ButtonNavigation";
import { StudentInterface } from "../Interfaces/StudentsInterface";
import { getToken } from "../Util/auth";
import axios from "axios";
import TableTemplate from "../Components/TableTemplate/TableTemplate";
import { json, Link } from "react-router-dom";

export interface JsonInterface {
    message: string,
    students: StudentInterface[]
}

export default function StudentsPage(){
    const studentHeader = ["name", "cpf", ""];
    const [students, setStudents] = useState<StudentInterface[]>([]);
    const token  = getToken();

    useEffect(() => {
        axios.get("/v1/students/", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => response.data)
        .then(responseData => {
            const data = responseData as JsonInterface;
            setStudents([...data.students]);
        })
        .catch(err => {
            throw json({message: "Error when fetched"}, {status: err.status})
        } );
    }, [setStudents, token]);
    return (
        <div className="p-4">
            <section>
                <BoxButtonNavigation title="Students">
                    <ButtonNavigation href="create" label="Register a new user" classNames="bg-blue-400 text-white py-2 hover:bg-blue-500"/>
                </BoxButtonNavigation>
            </section>
            <section className=" mx-auto  container">
                {students.length > 0 && (
                    <TableTemplate headers={studentHeader}>
                        <>
                            {
                                students.map(student => (
                                    <tr key={student.id}>
                                        <td className=" bg-slate-500/50 py-3 px-5">{student.name}</td>
                                        <td className=" bg-slate-500/50 py-3 px-5">{student.cpf}</td>
                                        <td className=" bg-slate-500/50 py-3 px-5"><Link to={`${student.id}`} className="btn link-id">Edit</Link></td>
                                    </tr>
                                ))
                            }    
                        </>
                    </TableTemplate>
                )}
            </section>
        </div>  
    );
}