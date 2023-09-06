import axios from 'axios'
import { fromJSON as repoFromJSON, type Repository } from './model/Repository'
import { fromJSON as userFromJSON, type User } from './model/User'
const endpoint = 'https://api.github.com'

const DEFAULT_HEADERS = {
  'X-GitHub-Api-Version': '2022-11-28'
}
export interface GithubData {
  repos?: Repository[]
  user?: User
}
class GitHubClient {
  private static readonly GITHUB_USERNAME: string = 'marutsuki'

  private static readonly REPO_ENDPOINT: string = `${endpoint}/users/${GitHubClient.GITHUB_USERNAME}/repos`

  private static readonly USER_ENDPOINT: string = `${endpoint}/users/${GitHubClient.GITHUB_USERNAME}`

  private readonly cache: GithubData = {}

  private async getRepos (): Promise<Repository[] | undefined> {
    if (this.cache.repos !== undefined) {
      return this.cache.repos
    }
    const res = await axios.get(
      GitHubClient.REPO_ENDPOINT,
      {
        headers: DEFAULT_HEADERS
      }
    )
    const repos = res.data.map(jsonObject => repoFromJSON(jsonObject))
    this.cache.repos = repos
    return repos
  }

  private async getUser (): Promise<User | undefined> {
    if (this.cache.user !== undefined) {
      return this.cache.user
    }
    const res = await axios.get(
      GitHubClient.USER_ENDPOINT,
      {
        headers: DEFAULT_HEADERS
      }
    )
    const user = userFromJSON(res.data)
    this.cache.user = user
    return user
  }

  async getAll (): Promise<GithubData> {
    const requests = [this.getRepos(), this.getUser()]
    await Promise.all(requests)
    return this.cache
  }
}

const INSTANCE = new GitHubClient()

export { INSTANCE as GitHubClient }

