import {SignUp} from "@clerk/nextjs";
import formImage from "../../../../public/formImage.jpg";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex items-center justify-center w-full h-[90vh]">
            <div className="grid grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden md:mx-auto h-fit w-full md:w-[60%]">
                <div className="hidden lg:block w-full bg-cover col-span-1">
                    <Image src={formImage} loading={`lazy`} alt={`form image`}
                           width={400} height={400} className={`w-full h-full object-fill`}/>
                </div>
                <div className=" col-span-2 lg:col-span-1 w-full p-8 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Fake Store</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome</p>
                    <SignUp appearance={{
                        elements:{
                            card:{
                                boxShadow:'none',
                            },
                            formButtonPrimary:{
                                backgroundColor:'#69DA6AFF',
                                color:'#273136',
                                "&:hover":{
                                    backgroundColor:'#273136',
                                    color:'#69DA6AFF',
                                },
                            },
                            headerSubtitle:{
                                display:'none',
                            },
                        },
                    }} path="/sign-up" />
                </div>
            </div>
        </div>
    );
}
