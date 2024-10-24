import { RoomInterface } from "./RoomInterface";

export interface TeacherInterface {
    id: number;
    name: string;
    cpf: string;
    room: RoomInterface
}