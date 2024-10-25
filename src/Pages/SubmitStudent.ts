import { ActionFunctionArgs, json, redirect } from "react-router-dom";
import { getToken } from "../Util/auth";
import axios from "axios";

export async function  action({request}: ActionFunctionArgs){
    const data = await request.formData(); 
    const token = getToken();

    const requestBody = {
        name: data.get('name'),
        roomNumber: data.get('room_number'),
        cpf: data.get('cpf'),
    }

    const response = await axios.post('/v1/students/store', requestBody, {
        headers: {
            Authorization: "Bearer " + token
        }
    });

    if (!(response.status >= 200 && response.status <= 201)) {
        throw json({message: 'Could not save event.'}, {status: 500})
    }

    return redirect('/students')
}