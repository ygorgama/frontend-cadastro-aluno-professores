import { useEffect, useState } from "react";
import BoxButtonNavigation from "../Components/BoxButtonNavigation/BoxButtonNavigation";
import ButtonNavigation from "../Components/ButtonNavigation/ButtonNavigation";
import { getToken } from "../Util/auth";
import { TeacherInterface } from "../Interfaces/TeacherInterface";
import axios from "axios";
import { Link } from "react-router-dom";
import TableTemplate from "../Components/TableTemplate/TableTemplate";


export interface JsonInterface {
    teachers: TeacherInterface[],
    message: string
}

export default function TeacherPage() {
    const teacherHeader = ["Name", "Room Number", "Cpf", ""];
    const [teachers, setTeachers] = useState<TeacherInterface[]>([]);
    const token = getToken();


    useEffect(() => {
        axios.get('/v1/teachers/index', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => response.data).
        then(responseData => {
            const data = responseData as JsonInterface;
            setTeachers([...data.teachers ])

        }
        ).catch(err => console.log(err))
    }, [setTeachers, token]);

    return (
        <div className="p-4">
            <section>
                <BoxButtonNavigation title="Teachers">
                    <>
                        <ButtonNavigation href="create" label="Register new teacher" classNames="bg-blue-400 text-white"/>
                    </>
                </BoxButtonNavigation>
            </section>
            <section>
                {teachers.length > 0 && 
                    <TableTemplate headers={teacherHeader}>
                        <>
                            {teachers.map(teacher => (
                                <tr key={teacher.id}>
                                    <td >{teacher.name}</td>
                                    <td >{teacher.room.id}</td>
                                    <td >{teacher.cpf}</td>
                                    <td ><Link to={`${teacher.id}`} className="btn link-id">Edit</Link></td>
                                </tr>
                            ))}
                        </>
                    </TableTemplate>
                }
            </section>
        </div>
    );
}