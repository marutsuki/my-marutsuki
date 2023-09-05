export interface User {
    name: string,
    avatarUrl: string,
    htmlUrl: string,
    publicRepos: number,
    bio: string
}

export const fromJSON = (json: any): User | null => {
    try {
        return {
            name: json.name,
            avatarUrl: json.avatar_url,
            htmlUrl: json.html_url,
            publicRepos: json.public_repos,
            bio: json.bio
        }
    } catch (e: unknown) {
        console.error("User.ts ::: fromJSON ::: Failed to parse JSON to User:", e);
        return null;
    }
}