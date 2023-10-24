import {useState} from "react";

import {CarForm, CarsComponent} from "../components";

export const CarsPage = () => {
    const [trigger, setTrigger] = useState(false)
    const [carForUpdate, setCarForUpdate] = useState(null)

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <CarsComponent setTrigger={setTrigger} trigger={trigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};