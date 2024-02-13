
import card from "../../assets/images/mid-card.jpg"


const TeamWork = () => {

    return (
        <div className="my-10">
            <div class="items-center mt-16  justify-center flex gap-2 grid-flow-col text-orange-500">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    class="fill-current"
                >
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p className="text-4xl text-orange-500 font-bold">About Us</p>
            </div>
            <div className="divider rounded-lg w-60 mx-auto"></div>
            <div className="my- grid grid-cols-1 lg:grid-cols-3 gap-10 p-4">
            </div>
            {/* Our team start here  */}
            <div className=" bg-neutral text-neutral-content">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="my-8 grid flex-grow  place-items-center"><div className="hero justify-center ">
                        <div className="hero-content flex-col lg:flex-row gap-14 px-24">
                            <div>
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="max-w-60  shadow-1xl rounded-full ring  ring-offset-base-200 ring-offset-1" />
                                <div className="text-center mt-3">
                                    <p className="text-xl font-bold">Sadid Hasan</p>
                                    <p>CEO & Founder</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold text-orange-500 ">
                                    Our Team
                                </h1>
                                <p className="py-5 text-justify">
                                    CrossRoads Study Abroad is a community of<br />
                                    Bangladeshi students studying overseas who can <br />
                                    help and guide school or college students in <br />
                                    Bangladesh towards receiving scholarships from <br />
                                    their dream universities.
                                </p>

                                <p className="py-3 text-justify ">
                                    All of us studying abroad have faced unique <br />
                                    problems and challenges during our own <br />
                                    endeavors, and we want to translate translate these  <br />
                                    experiences into an <span className="text-orange-500">easier</span> and 
                                    <span className="text-orange-500"> more successful <br />
                                    journey for you</span> .
                                    
                                </p>
                            </div>
                        </div>

                    </div>
                        <div className="mt-8 space-x-4 flex flex-row text-center">
                            <div>
                                <div className="avatar ">
                                    <div className="w-24 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className=" text-center mt-2">
                                    <p className="text-base font-bold">Aunannya Baunik</p>
                                    <p className="text-sm">Operating Officer</p>
                                </div>
                            </div>
                            <div>
                                <div className="avatar ">
                                    <div className="w-24 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className=" text-center mt-2">
                                    <p className="text-base font-bold">Tasneema Sama</p>
                                    <p className="text-sm">Marketing Officer</p>
                                </div>
                            </div>
                            <div>
                                <div className="avatar ">
                                    <div className="w-24 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className=" text-center mt-2">
                                    <p className="text-base font-bold">Lamea Tanjim Tanha</p>
                                    <p className="text-sm">Chief Strategy Officer</p>
                                </div>
                            </div>
                            <div>
                                <div className="avatar ">
                                    <div className="w-24 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className=" text-center mt-2">
                                    <p className="text-base font-bold">Aynur Rahman Nida</p>
                                    <p className="text-sm">Mentor/Moderator</p>
                                </div>
                            </div>
                            <div>
                                <div className="avatar ">
                                    <div className="w-24 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className=" text-center mt-2">
                                    <p className="text-base font-bold">Tanvir Rahman Khan</p>
                                    <p className="text-sm">Mentor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Team Ends Here  */}

                    <div className="divider lg:divider-horizontal"></div>

                    {/* What can we do star here .....  */}
                    <div className="grid flex-grow content-evenly place-items-center">
                        <h6 className="text-3xl font-bold text-orange-500">What We Can Do For You!</h6>
                        <div className=" grid grid-flow-col gap-4">

                            <div className="pr-2 text-center">

                                <div className="flex gap-5 ">
                                    <div>
                                        <div className="avatar text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                            </svg>
                                        </div>
                                        <div className=" text-center mt-2">
                                            <p className="text-base font-bold">
                                                Find the right program <br />
                                                for you and your <br />
                                                academic aspirations.</p>

                                        </div>
                                    </div>

                                    <div>
                                        <div className="avatar text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                            </svg>

                                        </div>
                                        <div className=" text-center mt-2">
                                            <p className="text-base font-bold">
                                                Be guided through your<br />
                                                application process.</p>

                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-5 mt-10">
                                    <div>
                                        <div className="avatar text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>

                                        </div>
                                        <div className=" text-center mt-2">
                                            <p className="text-base font-bold">
                                                Maximize your chances <br />
                                                of being granted a visa. </p>

                                        </div>
                                    </div>

                                    <div>
                                        <div className="avatar text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                            </svg>

                                        </div>
                                        <div className=" text-center mt-2">
                                            <p className="text-base font-bold">
                                                Get support all the way  <br />
                                                to your first day in <br />
                                                college/university.</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeamWork;