import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBarComp = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
           props.onSubmit(searchTerm);
            //window.location.href = `/search/${searchTerm}`;
        }
    }

    return (
        <div>
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form>
                    <TextField value={searchTerm} onChange={handleChange} onKeyPress={onKeyPress} fullWidth label="Search..." />
                </form>
            </Paper>
        </div>
    );
}

export default SearchBarComp;
