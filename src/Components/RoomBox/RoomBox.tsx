import { RoomInterface } from "../../Interfaces/RoomInterface";

export default function RoomBox({description, id}: RoomInterface) {
    return (
        <div  className="w-full bg-sky-300/80">
            <h3>{id}</h3>
            <p>{description}</p>
        </div>
    )
} 