import { Form, FormMethod } from "react-router-dom";

interface Props {
    children: React.ReactElement;
    method: FormMethod | undefined
    width: string;
}

export default function FormTemplate({children, method, width}: Props){
    return (
        <Form method={method} action="" className={"bg-gray-500/70 p-4 rounded h-auto " +  width}>
            {children}
        </Form>
    )
}