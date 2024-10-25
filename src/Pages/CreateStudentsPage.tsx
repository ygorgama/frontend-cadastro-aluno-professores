import { useEffect, useState } from "react";
import BoxButtonNavigation from "../Components/BoxButtonNavigation/BoxButtonNavigation";
import ButtonNavigation from "../Components/ButtonNavigation/ButtonNavigation";
import FormTemplate from "../Components/Form/FormTemplate";
import { RoomInterface } from "../Interfaces/RoomInterface";
import { JsonInterface } from "./RoomPage";
import { getToken } from "../Util/auth";
import axios from "axios";

export default function CreateStudentPage(){
    const [rooms, setRoom] = useState<RoomInterface[]>([]);
    const token = getToken();

    useEffect(() => {
        axios.get('/v1/rooms/index', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => response.data).
        then(responseData => {
            const data = responseData as JsonInterface;
            setRoom([...data.rooms ])

        }
        ).catch(err => console.log(err))
    }, [setRoom, token]);
    return (
        <div className="p-4">
            <section>
                <BoxButtonNavigation title="Students register">
                    <>
                        <ButtonNavigation href="/students" label="Return" classNames="bg-red-400 hover:bg-red-500 text-white"/>
                    </>
                </BoxButtonNavigation>
            </section>
            <section className="mt-4 flex w-full justify-center">
                <FormTemplate method="post" width="w-96">
                    <>
                        <div className="">
                            <div className="mb-3">
                                <label className="block font-semibold mb-2 text-white " htmlFor="name">Name</label>
                                <input type="text" name="name"  id="name" className="form-input w-full border-none rounded"/>
                            </div>
                            <div className="mb-3">
                                <label className="block font-semibold mb-2 text-white " htmlFor="cpf">Cpf</label>
                                <input type="text" name="cpf"  id="cpf" className="form-input w-full border-none rounded"/>
                            </div>
                            <div className="mb-8 grid-rows-12">
                                <label className="block font-semibold mb-2 text-white " htmlFor="room">Room number</label>
                                <select name="room_number" id="room" className="form-select w-full rounded border-none">
                                    {
                                        rooms.map(room => (
                                            <option  key={room.id} value={room.id}>{room.description}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn bg-green-400 font-semibold text-white py-2 w-full hover:bg-green-500">Create</button>
                        </div>
                    </>
                </FormTemplate>
            </section>
        </div>
    );
}