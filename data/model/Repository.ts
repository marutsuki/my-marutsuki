export interface Repository {
    name: string,
    htmlUrl: string,
    cloneUrl: {
        http: string,
        ssh: string
    }
    lastUpdated: number
}

export const fromJSON = (json: any): Repository | null => {
    try {
        return {
            name: json.name,
            htmlUrl: json.clone_url,
            cloneUrl: {
                http: json.clone_url,
                ssh: json.ssh_url
            },
            lastUpdated: Date.parse(json.updated_at)
        }
    } catch (e: unknown) {
        console.error("Repository.ts ::: fromJSON ::: Failed to parse JSON to repository:", e);
        return null;
    }
}