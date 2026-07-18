import { Button, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function Lab6() {
    const {id} = useParams();
    const {data} = useQuery({
        queryKey: [],
        queryFn: () => {},
    });
useEffect(() => {
    
})
}
export default Lab6;