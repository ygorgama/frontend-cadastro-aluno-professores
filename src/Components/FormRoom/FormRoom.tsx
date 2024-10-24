import { Form } from "react-router-dom"
import BoxButtonNavigation from "../BoxButtonNavigation/BoxButtonNavigation"
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation"

const FormRoom = () => {
    return (
        <div className="p-5">
            <section>
                <BoxButtonNavigation>
                    <>
                        <h1 className="uppercase font-mono text-slate-500 mb-4">Create a new room</h1>
                        <ButtonNavigation classNames="bg-red-400 text-white hover:bg-red-500 py-2" href="/rooms" label="Return"/>
                    </>
                </BoxButtonNavigation>
            </section>

            <section className="mt-4">
                <Form method="post" action="" className=" bg-gray-500/70 p-4 rounded w-96 h-80">
                    <div className="mb-3">
                        <label className="block font-semibold mb-2 text-white " htmlFor="room">Room number</label>
                        <input type="number" name="room_number"  id="room" className="form-input w-full border-none rounded"/>
                    </div>
                    <div className="mb-3">
                        <label className="block font-semibold mb-2 text-white" htmlFor="room">Description</label>
                        <input type="text"  id="description" name="description" className="form-input w-full rounded border-none"/>
                    </div>
                    <div className="">
                        <button type="submit" className="btn bg-green-400 font-semibold text-white py-2 w-full hover:bg-green-500">Create</button>
                    </div>
                </Form>
            </section>

        </div>
    )
} 

export default FormRoom;