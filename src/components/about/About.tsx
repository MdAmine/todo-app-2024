import {useEffect, useState} from "react";

function About() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    async function fetchRepoInfos() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://api.github.com/users/botazitihssane");
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const data = await response.json();
            setUser(data);
            console.log(data);
            console.log(user);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchRepoInfos();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="p-4">
                            <h5>This an about me page</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="p-4 mt-3">
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p className="text-danger">{error}</p>
                            ) : user ? (
                                <div>
                                    <h3>ID: {user.id}</h3>
                                    <img src={user.avatar_url} alt={user.login}
                                         className="img-fluid rounded-circle mb-3"/>
                                    <h4>{user.login}</h4>
                                </div>
                            ) : (
                                <p>No user data available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About