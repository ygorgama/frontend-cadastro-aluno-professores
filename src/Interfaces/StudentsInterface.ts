import { RoomInterface } from "./RoomInterface";

export interface StudentInterface {
    name: string,
    cpf: string,
    id: number
    rooms: RoomInterface[],
}