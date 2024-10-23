import BoxNavigation from "../Components/BoxNavigation/BoxNavigation";

const HomePage = () => {
    return (
        <div className="bg-green-300/50 w-full h-screen">
            <div  className="p-4"> 
                <section >
                    <div >
                        <h1 className="uppercase text-gray-600/85">Honor School Salvador admin system</h1>
                    </div>
                </section>
                <section className="mt-6">
                    <h2 className="uppercase text-gray-600/70">What's your next step</h2>
                    <p className="text-gray-600/100 font-semibold">Go to one of the routes down here</p>
                    <div className="flex mt-3">
                        <BoxNavigation href="/students" title="Students" classNames="mr-4"/>
                        <BoxNavigation  href="/teachers" title="Teachers" classNames="mr-4"/>
                        <BoxNavigation  href="/rooms" title="Rooms" />

                    </div>
                </section>
            </div>

        </div>
    )
}

export default HomePage;