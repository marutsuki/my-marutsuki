import { GitHubClient, GithubData } from "data/github.client";
import { useEffect, useState } from "react";

export const useGithubClient = <T,>(extractor: (data: GithubData) => T): T => {
    const [data, setData] = useState<GithubData>({});
    useEffect(() => {
        GitHubClient.getAll().then(data => {
            setData(data);
        });
    }, []);

    return extractor(data);
}