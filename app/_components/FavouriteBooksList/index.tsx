import { getLocale } from '@/app/_lib/utils/i18n'
import messageByLocale from '@/app/_assets/messageByLocale'

export default async function FavouriteBooksList() {
  const locale = getLocale()

  const favoriteBooks = [
    {
      title: 'The Subtle Art of Not Giving a Fuck',
      author: 'Mark Manson',
    },
    {
      title: 'Everything is Fucked',
      author: 'Mark Manson',
    },
    {
      title: 'Same as Ever',
      author: 'Morgan Housel',
    },
    {
      title: 'Never Split The Difference',
      author: 'Chris Voss',
    },
    {
      title: 'The Untethered Soul',
      author: 'Michael Singer',
    },
    {
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
    },
    {
      title: 'The Way of The Superior Man',
      author: 'David Deida',
    },
    {
      title: 'Market Wizards (Series of Books)',
      author: 'Jack Schwager',
    },
  ]

  return (
    <div className="mt-8 px-2 lg:px-0">
      <h2 className="text-3xl font-semibold mb-4">{messageByLocale.favoriteBooks.title[locale]}</h2>

      <ul className="">
        {favoriteBooks.map((book, i) => (
          <li className="flex gap-2" key={book.title}>
            <span className="font-bold">{book.title}</span>-<span>{book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
