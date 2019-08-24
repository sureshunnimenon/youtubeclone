import React, { Component } from 'react'

import { Paper, TextField } from '@material-ui/core'

export default class SearchBar extends Component {
    state={
        searchterm: ""
    }

    handleChange = (event) => this.setState({searchterm: event.target.value})

    handleSubmit = (event) => {
        const {searchterm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchterm);

        event.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <h1> This is search bar cmponent </h1> */}
                <Paper elevation = {6} style={{padding:'25px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Search" onChange={this.handleChange} />
                    </form>
                </Paper>
            </div>
        )
    }
}
