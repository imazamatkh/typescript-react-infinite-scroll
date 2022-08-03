import { UsersList } from '../../models/models'
import { useState } from 'react'

interface UsersProps {
  users: UsersList
}

export const Products = ({ users }: UsersProps) => {
  const [details, setDetails] = useState(false)

  const buttonBgClassName = details ? 'bg-gray-300' : 'bg-yellow-400'
  const buttonClasses = ['py-2 px-4 border', buttonBgClassName]

  return (
    <div className={'border py-2 px-4 rounded flex flex-col items-center mb-2'}>
      <img className={'mb-2'} src={users.avatar} alt={users.first_name} />
      <span>{users.id}</span>
      <div className={'flex gap-x-[5px]'}>
        <span className={''}>{users.first_name}</span>
        <span className={''}>{users.last_name}</span>
      </div>
      <button
        className={buttonClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && (
        <div className={'flex flex-col items-center'}>
          <div className={''}>Gender: {users.gender}</div>
          <div className={''}>Email: {users.email}</div>
          <div className={''}>Phone: {users.phone}</div>
          <div className={''}>IP: {users.ip_address}</div>
          <div className={''}>Address: {users.address}</div>
        </div>
      )}
    </div>
  )
}
