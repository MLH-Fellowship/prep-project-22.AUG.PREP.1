import React, { Fragment } from 'react';
import './Autocomplete.css';

const Autocomplete = ({ suggestionGenerator, minLength }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [activeSuggestion, setActiveSuggestion] = React.useState(0);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState([]);

    const reset = () => {
        setActiveSuggestion(0);
        setShowSuggestions(false);
        setSuggestions([]);
    };

    const onChange = (e) => {
        const userInput = e.target.value;
        setSearchTerm(userInput);
        if (!userInput || userInput.length < minLength) {
            reset();
            return;
        }

        setActiveSuggestion(0);
        setShowSuggestions(true);
        suggestionGenerator(userInput).then((suggestions) =>
            setSuggestions(suggestions)
        );
        setSuggestions(suggestionGenerator(userInput));
    };

    const onClick = (e) => {
        setSearchTerm(e.target.innerText);
        reset();
    };

    const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            reset();
            setSearchTerm(suggestions[activeSuggestion]);
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                setActiveSuggestion(suggestions.length - 1);
                return;
            }
            setActiveSuggestion(activeSuggestion - 1);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            setActiveSuggestion((activeSuggestion + 1) % suggestions.length)
        }
    };

    let suggestionsListComponent;

    if (showSuggestions && searchTerm) {
        if (suggestions.length) {
            suggestionsListComponent = (
                <ul className='suggestions'>
                    {suggestions.map((suggestion, index) => {
                        let className;
                        // Flag the active suggestion with a className
                        if (index === activeSuggestion) {
                            className = 'suggestion-active';
                        }
                        return (
                            <li
                                className={className}
                                key={suggestion}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className='no-suggestions'>
                    <em>No suggestions, you're on your own!</em>
                </div>
            );
        }
    }

    return (
        <Fragment>
            <input
                type='text'
                id='search'
                className='form-control'
                placeholder='Search by Name'
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={searchTerm}
            />
            {suggestionsListComponent}
        </Fragment>
    );
};

export default Autocomplete;
