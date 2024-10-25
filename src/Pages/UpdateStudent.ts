import { ActionFunctionArgs, json, redirect } from "react-router-dom";
import { getToken } from "../Util/auth";
import axios from "axios";

export async function  action({request}: ActionFunctionArgs){
    const data = await request.formData(); 
    const token = getToken();

    const id = data.get('id');

    const requestBody = {
        name: data.get('name'),
        cpf: data.get('cpf'),
    }

    console.log(requestBody)

    const response = await axios.put(`/v1/students/${id}`, requestBody, {
        headers: {
            Authorization: "Bearer " + token
        }
    });

    console.log(response)

    if (!(response.status >= 200 && response.status <= 201)) {
        throw json({message: 'Could not save event.'}, {status: 500})
    }

    return redirect('/students')
}