import React from 'react';
import Search from '../searchBar/SearchBar'
import ListOfUsers from '../listOfUsers/ListOfUsers'
import { ListOfUsersExtra }  from '../listOfUsers/ListOfUsers-extra'
import Loader from '../loader/Loader'

export const Home = ({users, val, search, list, loading}) => {

    return(
        <main>
         {loading && <Loader />}
        <Search search={search} val={val}/>
        {(list ? (
          <ListOfUsers
            users={users}
            val={val}
            search={search}
          />
        ) : (
          <ListOfUsersExtra
            users={users}
            val={val}
            search={list}
          />
        ))}
        </main>
    )
}