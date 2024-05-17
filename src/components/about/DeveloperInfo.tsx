import {useEffect, useState} from "react";
import { useAuth } from "../../context/AuthContext";

const DeveloperInfo = () => {
    const [developerInfo, setDeveloperInfo] = useState(null);
    const {handleLogout} = useAuth();

    useEffect(() => {
        const fetchDeveloperInfo = async () => {
            try {
                const response = await fetch('https://api.github.com/users/ABDSSAMAD-RAHHAOUI');
                if (!response.ok) {
                    throw new Error('Failed to fetch developer info');
                }
                const data = await response.json();
                setDeveloperInfo(data);
            } catch (error) {
                console.error('Error fetching developer info:', error.message);
            }
        };

        fetchDeveloperInfo();
    }, []);

    return (
        <><h2 className="text-center">Developer Infos</h2>
            {developerInfo && (
                <div className="github-user d-flex align-items-start">
                    <img src={developerInfo.avatar_url} alt={developerInfo.name} style={{ width: "auto", height: "120px", marginRight: "20px" }} />
                    <div>
                        <h6>{developerInfo.name}</h6>
                        <p>{developerInfo.bio}</p>
                        <p style={{ display: 'flex', alignItems: 'center' }}>Profile : <a style={{fontSize:'12px'}} href={developerInfo.html_url} target="_blank" rel="noopener noreferrer">{developerInfo.html_url}</a>
                        </p>
                        <button className="btn btn-secondary btn-sm" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeveloperInfo;