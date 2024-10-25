import { useEffect, useState } from "react"
import { StudentInterface } from "../Interfaces/StudentsInterface"
import { getToken } from "../Util/auth";
import { json, useParams } from "react-router-dom";
import axios from "axios";
import FormTemplate from "../Components/Form/FormTemplate";
// import { JsonInterface as RoomJsonInterface} from "./RoomPage";
// import { RoomInterface } from "../Interfaces/RoomInterface";

interface JsonInterface {
    message: string;
    student: StudentInterface,
    
}

export  default function StudentPage(){
    // const [rooms, setRooms] =  useState<RoomInterface[]>([]);
    const [student, setStudents] =  useState<StudentInterface>();
    const token = getToken();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`/v1/students/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => response.data)
        .then(responseData => {
            const data = responseData as JsonInterface;
            setStudents(data.student);
        }).catch(err => {
            throw json({messsage: "Could not fetch event"}, {status: err.status})
        });
    }, [setStudents,token, id]);



    return(
        <div className="p-4">
            <section className="">
                {
                    student &&
                    (
                        <FormTemplate  method="put" width="mx-auto container w-96">
                            <>
                                <div className="">
                                    <div className="mb-3">
                                        <label className="block font-semibold mb-2 text-white " htmlFor="name">Name</label>
                                        <input defaultValue={student.name} type="text" name="name"  id="name" className="form-input w-full border-none rounded"/>
                                    </div>
                                    <div className="mb-3">
                                        <label  className="block font-semibold mb-2 text-white " htmlFor="cpf">Cpf</label>
                                        <input defaultValue={student.cpf} type="text" name="cpf"  id="cpf" className="form-input w-full border-none rounded"/>
                                    </div>
                                    {/* <div className="mb-8 grid-rows-12">
                                        <label className="block font-semibold mb-2 text-white " htmlFor="room">Room number</label>
                                        <select name="room_number"  defaultValue={student.rooms[0].id} id="room" className="form-select w-full rounded border-none">
                                            {
                                                rooms.map(room => (
                                                    <option  key={room.id} value={room.id}>{room.description}</option>
                                                ))
                                            }
                                        </select>
                                    </div> */}
                                </div>
                                <input type="hidden" name="id" value={student.id} className="hidden"/>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-green-400 font-semibold text-white py-2 w-full hover:bg-green-500">Save</button>
                                </div>
                            </>
                        </FormTemplate>
                    )
                }
            </section>
        </div>
    )
}