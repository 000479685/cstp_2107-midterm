import React, {useContext} from 'react'
import { TextField } from "@mui/material"
import {Box, Button } from "@mui/material"
import DataContext from "../../context/DataContext"

const SearchBar = ({handleSearchClick, currentQuery, setCurrentQuery}) =>
{
    const {setReposList} = useContext(DataContext)

    return (
        <Box display="flex">
            <TextField 
                id="standard-search"
                label="Search for Products"
                type="search"
                variant="outlined"
                value={currentQuery}
                fullWidth={true}
                onChange={(event) => setCurrentQuery(event.target.value)}
            />

        <Button variant='contained' onClick={() => {
            handleSearchClick();
            setReposList([]);
        }}>Search</Button>

        </Box>
    )

}

export default SearchBar