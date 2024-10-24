import { ActionFunctionArgs, json, redirect } from "react-router-dom";
import { getToken } from "../Util/auth";
import axios from "axios";

export async function  action({request}: ActionFunctionArgs){
    const data = await request.formData(); 
    const token = getToken();

    const requestBody = {
        roomNumber: data.get('room_number'),
        description: data.get('description')
    }

    const response = await axios.post('/v1/rooms/store', requestBody, {
        headers: {
            Authorization: "Bearer " + token
        }
    });

    if (!(response.status === 201)) {
        throw json({message: 'Could not save event.'}, {status: 500})
    }

    return redirect('/rooms')
}