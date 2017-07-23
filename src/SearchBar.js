import React, { Component } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import InputGroup from 'react-bootstrap/lib/InputGroup';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import InputGroupButton from 'react-bootstrap/lib/InputGroupButton';
import './App.css';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchText: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(e) {
        this.setState({ searchText: e.target.value });
    }

    getValidationState() {
        // Check for punctuation in search text
        if (this.state.searchText.match(/\s|\.|,|\$|!|%|\^|&|@|~|\(|\)|\+|-|;|\/|\\|\||<|>|"|'|:|\?|=|\*|#/g)) {
            return 'error';

        }
        else {
            return 'success';
        }
    }

    // This second layer avoids calling the search function while component is rendering
    search(){
        this.props.search(this.state.searchText);
    }

    render() {
        return (

            <form id="main-search-bar">
                <FormGroup
                    controlId="mainSearchText"
                    bsSize="large"
                    validationState={this.getValidationState()}
                >
                    <InputGroup>
                        <InputGroupAddon>#</InputGroupAddon>
                        <FormControl
                            type="text"
                            value={this.state.searchText}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        { this.getValidationState() === 'success' ?
                            // If search text is valid, display search button
                            <InputGroupButton>
                                <Button
                                    bsSize="large"
                                    active={this.getValidationState() === 'success'}
                                    onClick={this.search}
                                >
                                    <Glyphicon glyph="search"/>
                                </Button>
                            </InputGroupButton> :
                            // If search text is NOT valid, display remove glyph
                            <InputGroupAddon>
                                <Glyphicon glyph="remove"/>
                            </InputGroupAddon>
                        }
                    </InputGroup>
                    <HelpBlock>{this.getValidationState() === 'success' ? '' : 'Hashtags cannot include whitespace or punctuation.'}</HelpBlock>
                </FormGroup>
            </form>

        )
    }

}

export default SearchBar;