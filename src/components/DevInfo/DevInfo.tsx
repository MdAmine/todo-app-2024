import './DevInfo.css'
export default function DevInfo({ user , onLogout}) {
    return (
        <>
            <h2 className="text-center">Developer Infos</h2>
            {user && (
                <div className="github-user d-flex align-items-start">
                    <img src={user.avatar_url} alt={user.name} style={{ width: "auto", height: "120px", marginRight: "20px" }} />
                    <div>
                        <h6>{user.name}</h6>
                        <p>{user.bio}</p>
                        <p style={{ display: 'flex', alignItems: 'center' }}>Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>
                        </p>
                        <button className="btn btn-secondary btn-sm" onClick={onLogout}>Logout</button>
                    </div>
                </div>
            )}
        </>
    )

}
