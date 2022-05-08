import { useEffect, useState } from "react";

const useMotor = (id, quantity) => {
    const [motor, setMotor] = useState({});
    useEffect(() => {
        fetch(`https://serene-chamber-17586.herokuapp.com/motor/${id}`)
            .then((res) => res.json())
            .then((data) => setMotor(data));
    }, [id, quantity]);
    return [motor];
};
export default useMotor;
