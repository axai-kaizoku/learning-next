'use client';

import { useState } from "react";
import "./Search.css"
import data from "../../public/USER.json"

interface UserData {
    _id: string;
    name: string;
}

const Search = () => {
    const [value, setValue] = useState("");

    const onSearch = (name: string) => {
        setValue(name)
    }
    return (
        <div className="m-8 text-center">
            {JSON.stringify(value)}
            <h1 className="text-4xl font-bold">Search</h1>
            <div className="search-box">
                <input type="text" placeholder="Search Functionality"
                    value={value}
                    onChange={e => { setValue(e.target.value) }}
                    className="text-2xl p-2 px-4  border-solid border-blue-600 border-4 rounded w-full" />
                <div className="dropdown">
                    {data.filter((item: UserData) => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.name.toLowerCase();
                        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
                    }).slice(0, 10)
                        .map((item: UserData) => 
                            <div onClick={() => onSearch(item.name)} className="dropdown-row" key={item._id}>{item.name}</div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Search;