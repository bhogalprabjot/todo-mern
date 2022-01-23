import React from 'react';
import { useParams } from 'react-router-dom';
const ViewList = () => {
    const {id} = useParams();
    console.log("This is list ",id);
    return (
        <div>This is list {id}</div>
    );
};

export default ViewList;
