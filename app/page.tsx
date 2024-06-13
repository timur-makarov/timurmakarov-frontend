import Bio from './_components/Bio'
import ProfileImage from './_components/ProfileImage'
import ArticleList from './_components/ArticleList'

export default function Home() {
  return (
    <main>
      <ProfileImage />
      <Bio />
      <ArticleList />
    </main>
  )
}
