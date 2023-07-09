import axios from "axios";
import { Repository, fromJSON } from "./model/Repository";

const endpoint = 'https://api.github.com';

interface Cache {
    repos?: Array<Repository>;
}
class GitHubClient {

    private static readonly GITHUB_USERNAME: string = "marutsuki"
    private static readonly REPO_ENDPOINT: string = `${endpoint}/users/${GitHubClient.GITHUB_USERNAME}/repos`;
    private cache: Cache = {};
    private async getRepos() {
        if (this.cache.repos !== undefined) {
            return this.cache.repos;
        }
        const res = await axios.get(
            GitHubClient.REPO_ENDPOINT,
            {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }
        );
        const repos = res.data.map(jsonObject => fromJSON(jsonObject));
        this.cache.repos = repos;
        return repos;
    }
    async getAll() {
        const requests = new Array<Promise<void>>();
        requests.push(this.getRepos());
        await Promise.all(requests);
    }
}

const INSTANCE = new GitHubClient();

export { INSTANCE as GitHubClient };