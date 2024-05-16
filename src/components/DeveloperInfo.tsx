import {useEffect, useState} from "react";
import {User} from "../types/user.ts";
import {useNavigate} from "react-router-dom";

export const DeveloperInfo = () => {
    const [user, setUser] = useState<User | null>(null);
    let navigate = useNavigate();

    useEffect(() => {
        fetchGithubInfo()
    }, []);

    const fetchGithubInfo = async () => {
        const response = await fetch('https://api.github.com/users/hanslanda14ib');
        const data = await response.json();
        setUser({
            login: data.login,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            bio: data.bio,
            location: data.location,
            blog: data.blog

        });
    }

    return (
        <div className='container d-flex gap-3'>
            <img src={user?.avatar_url} alt='Avatar' width={250}/>
            <div>
                <p>{user?.login}</p>
                <p>{user?.bio}</p>
                <p>
                    <a href={user?.html_url} target='_blank'>Profile</a>
                </p>
                <p>{user?.blog}</p>
                <p>{user?.location}</p>
                <button className='btn btn-secondary' onClick={() => navigate(("/todos"))}>Back to Todos page</button>
            </div>
        </div>
    )
}