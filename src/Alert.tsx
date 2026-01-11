import { ReactNode } from "react";

interface Props {
    children : ReactNode;
}

function Alert({children}:Props){
    return (
    <div className="alert alert-primary">
        {children}
        <br />
        <button className="btn btn-success">Click ME!!</button>
    </div>
);
}

export default Alert;