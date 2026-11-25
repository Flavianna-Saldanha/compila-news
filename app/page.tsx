import { ConstructionPage } from "./construction-page";

const REPO_COMMITS_URL =
  "https://api.github.com/repos/Flavianna-Saldanha/compila-news/commits?per_page=1";

async function getCommitCount(): Promise<number | null> {
  try {
    const response = await fetch(REPO_COMMITS_URL, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const linkHeader = response.headers.get("link");
    if (linkHeader) {
      const match = linkHeader.match(/[?&]page=(\d+)>; rel="last"/);
      if (match) {
        return Number(match[1]);
      }
    }

    const commits = (await response.json()) as unknown[];
    return Array.isArray(commits) ? commits.length : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const commitCount = await getCommitCount();

  return <ConstructionPage commitCount={commitCount} />;
}
