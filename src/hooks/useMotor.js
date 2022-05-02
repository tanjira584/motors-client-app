import { useEffect, useState } from "react";

const useMotor = (id, quantity) => {
    const [motor, setMotor] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/motor/${id}`)
            .then((res) => res.json())
            .then((data) => setMotor(data));
    }, [id, quantity]);
    return [motor];
};
export default useMotor;
