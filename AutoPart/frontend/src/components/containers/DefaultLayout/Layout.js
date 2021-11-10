import React from "react";
import Header from "../../header";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default props => (
    <>
        <Header />
        <div className="container">
            {props.children}
        </div>
    </>
)