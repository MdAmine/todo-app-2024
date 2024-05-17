const githubUrl = 'https://api.github.com/users/ELBOUROUMIABDELKARIM';

export const fetchGithubInfos = async () => {
    const response = await fetch(githubUrl);
    const data = await response.json();
    const { name, avatar_url, html_url, bio } = data;
    return { name, avatar_url, html_url, bio };
};
