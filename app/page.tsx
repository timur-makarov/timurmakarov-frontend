import Bio from './_components/Bio'
import ProfileImage from './_components/ProfileImage'
import ArticleList from './_components/ArticleList'
import FavouriteBooksList from '@/app/_components/FavouriteBooksList'
import FavouriteQuote from '@/app/_components/FavouriteQuote'

export default function Home() {
  return (
    <div className="pageWrapper">
      <ProfileImage />
      <Bio />
      <ArticleList />
      <FavouriteBooksList />
      <FavouriteQuote />
    </div>
  )
}
