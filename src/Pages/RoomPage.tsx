import { useEffect, useState } from "react";
import { RoomInterface } from "../Interfaces/RoomInterface";
import axios from "axios";
import { getToken } from "../Util/auth";
import ButtonNavigation from "../Components/ButtonNavigation/ButtonNavigation";
import RoomBox from "../Components/RoomBox/RoomBox";
import BoxButtonNavigation from "../Components/BoxButtonNavigation/BoxButtonNavigation";

export interface JsonInterface {
    rooms: RoomInterface[],
    message: string
}

export default function RoomPage() {
    const [room, setRoom] = useState<RoomInterface[] | []>([]);
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
                <BoxButtonNavigation title="Rooms">
                    <>
                        <ButtonNavigation href="/rooms/create" classNames="bg-blue-400 text-white hover:bg-blue-500 py-2" label="Register new room"/>
                    </>
                </BoxButtonNavigation>
            </section>
            <section className="mt-6">
                { room.length > 0 ? room.map(room => {
                    return (
                        <RoomBox key={room.id} description={room.description} id={room.id}/>
                    );
                }) : <h2>No room registred on the system</h2>}
            </section>
        </div>
    )
};

