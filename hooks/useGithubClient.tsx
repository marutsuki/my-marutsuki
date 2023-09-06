import { GitHubClient, type GithubData } from 'data/github.client'
import { useEffect, useState } from 'react'

export const useGithubClient = <T,>(extractor: (data: GithubData) => T): T | null => {
  const [data, setData] = useState<GithubData | null>(null)
  useEffect(() => {
    GitHubClient.getAll().then(data => {
      setData(data)
    }).catch(e => {
      console.error('An error occurred getting Github data', e)
    })
  }, [])
  if (data === null) {
    return null
  }
  return extractor(data)
}
