import { Products } from './components/Products/Products'
import { useUsers } from './hooks/users'
import { Loader } from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

function App() {
  const { allUsers, loading, error } = useUsers()
  return (
    <>
      <div className={'container mx-auto max-w-2xl pt-5 pb-5'}>
        {error && <ErrorMessage error={error} />}
        {allUsers.map((user) => (
          <Products users={user} key={user.id} />
        ))}
        {loading && <Loader />}
      </div>
    </>
  )
}

export default App
