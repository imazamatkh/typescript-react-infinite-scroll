import { useEffect, useState } from 'react'

import { UsersList } from '../models/models'

import axios, { AxiosError } from 'axios'

export function useUsers() {
  let offset = 0
  const [allUsers, setAllUsers] = useState<UsersList[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const fetchUsers = () => {
    setLoading(true)
    setTimeout(async () => {
      try {
        setError('')
        const response = await axios.get<UsersList[]>(
          `http://localhost:3500/items?_limit=${offset}&_page=${page}`
        )
        const data = response.data
        setAllUsers([...allUsers, ...data])
        setLoading(false)
      } catch (err: unknown) {
        const error = err as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }, 2000)
    offset += 10
  }

  const handleScroll = (event: any) => {
    if (
      window.innerHeight + event.target.documentElement.scrollTop + 1 >=
      event.target.documentElement.scrollHeight
    ) {
      fetchUsers()
    }
  }

  useEffect(() => {
    fetchUsers()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return { allUsers, loading, error }
}
