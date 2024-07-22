'use client'
import { useState } from 'react'
import clsx from 'clsx'

type Props = {
  title: string
  content: string
}

export default function ArticleAccordion({ title, content }: Props) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <h4>
        <button
          type="button"
          className="flex items-center justify-between w-full pl-3 pr-6 py-3 font-medium border
          border-gray-400 rounded-lg dark:border-gray-700 hover:bg-gray-100
          dark:hover:bg-gray-800 mb-4"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="text-xl">{title}</span>
          <svg
            className={clsx('w-3 h-3 shrink-0', isActive ? '' : 'rotate-180')}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h4>
      <div className={isActive ? 'block' : 'hidden'}>
        <div className="border border-gray-500">
          <p className="whitespace-pre-line p-2">{content}</p>
        </div>
      </div>
    </div>
  )
}
