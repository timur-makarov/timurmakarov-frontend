import Bio from './_components/Bio'
import ArticleList from './_components/ArticleList'
import FavoriteBooksList from './_components/FavoriteBooksList'
import FavoriteQuote from './_components/FavoriteQuote'

export default function Home() {
  return (
    <div>
      <Bio />
      <ArticleList />
      <FavoriteBooksList />
      <FavoriteQuote />
    </div>
  )
}
