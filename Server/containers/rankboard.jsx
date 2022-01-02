import React, { useState } from "react";
import Table from "../components/table";
import {Button} from 'reactstrap';
import fetch from "isomorphic-fetch";
import {useSelector} from 'react-redux';

export default (props) => {
    const isLogin = useSelector(state=>state.isLogin)
    const ip = useSelector(state=>state.ip)
    return (
        <div>
            {isLogin &&
               <Button color="danger" onClick={()=>{
                    fetch(`${ip}/ta/reset?pass=taonly`)
                }}>Clear data</Button>
            }
            <Table history={props.history[0]} />
        </div>
    );
};
