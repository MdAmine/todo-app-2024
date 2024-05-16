import {useEffect, useState} from "react";

const FetchApi = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch('https://api.github.com/users/yaimadeddine');
        const data = await response.json();
        console.log(data);
        setData(data);
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div style={{width: "18rem"}}>
                    <img src={data.avatar_url} className="img-fluid rounded-circle" alt="Avatar"/>
                    <div className="mt-3 text-center">
                        <h4><b>{data.name}</b></h4>
                        <p><span>Profile: </span><a href={data.html_url}>{data.html_url}</a></p>
                        <button className="btn btn-danger" onClick={props.logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FetchApi;
