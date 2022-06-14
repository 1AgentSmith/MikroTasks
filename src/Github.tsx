import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";
import s from './Github.module.css'

type SearchUserType = {
    login: string
    id: number
}
type SearchResult = {
    items: Array<SearchUserType>
}
type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}


export const Github = () => {
    // const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    // const [users, setUsers] = useState<SearchUserType[]>([])
    //
    // const [tempSearch, setTempSearch] = useState('')
    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTempSearch(e.currentTarget.value)
    // }
    // const fetchData = (term: string)=> {
    //     axios.get<SearchResult>(`https://api.github.com/search/users?q=${term}`)
    //         .then(res =>
    //             setUsers(res.data.items))
    // }
    // useEffect(() => {
    //     console.log('SYNC TAB TITLE')
    //     if (selectedUser) {
    //         document.title = selectedUser.login
    //
    //     }
    // }, [selectedUser])
    // useEffect(() => {
    //     console.log('SYNC USERS')
    //     fetchData('1agentsmith')
    // }, [])

    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])
    const [userDetails, setUserDetails] = useState<null | UserType>(null)
    const [tempSearch, setTempSearch] = useState('')


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTempSearch(e.currentTarget.value)
    }
    const fetchData = (term: string) => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${term}`)
            .then(res =>
                setUsers(res.data.items))
    }
    useEffect(() => {
        console.log('SYNC TAB TITLE')
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])
    useEffect(() => {
        console.log('SYNC USERS')
        fetchData('1agentsmith')
    }, [])

    useEffect(() => {
        console.log('SYNC USER DETAILS')
        if (!!selectedUser) {
            axios
                .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    return (
                        setUserDetails(res.data)
                    )
                })
        }
    }, [selectedUser])

    return (
        <div className={s.container}>
            <div>
                <div>
                    <input placeholder='search' value={tempSearch} onChange={onChangeHandler}/>
                    <button onClick={() => {
                        fetchData(tempSearch)
                    }}>find
                    </button>
                </div>
                <ul>
                    {users.map((u) =>
                        <li key={u.id} className={selectedUser === u ? s.selected : ''}
                            onClick={() => {
                                setSelectedUser(u)
                            }}>{u.login}</li>
                    )}
                </ul>
            </div>
            <div>
                <h2>Username</h2>
                {userDetails && <div>
                    <img src={userDetails.avatar_url}/>
                    <div>{userDetails.login}, followers: {userDetails.followers}</div>
                </div>
                }
            </div>
        </div>
    )
}