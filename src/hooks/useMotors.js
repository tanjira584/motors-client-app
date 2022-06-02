import { useEffect, useState } from "react";

const useMotors = ({ make, type, price, model, transmission, color, fuel }) => {
    const [motors, setMotors] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fetch(
            `http://localhost:5000/motors?make=${make}&type=${type}&price=${price}&model=${model}&transmission=${transmission}&color=${color}&fuel=${fuel}`
        )
            .then((res) => res.json())
            .then((data) => {
                setMotors(data);
                setLoad(false);
            });
    }, [make, type, price, model, transmission, color, fuel]);
    return [motors, load, setMotors];
};
export default useMotors;
