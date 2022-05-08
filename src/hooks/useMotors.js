import { useEffect, useState } from "react";

const useMotors = () => {
    const [motors, setMotors] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fetch("https://serene-chamber-17586.herokuapp.com/motors")
            .then((res) => res.json())
            .then((data) => {
                setMotors(data);
                setLoad(false);
            });
    }, []);
    return [motors, load, setMotors];
};
export default useMotors;
