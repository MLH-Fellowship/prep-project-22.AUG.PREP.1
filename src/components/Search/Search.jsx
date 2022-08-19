import React, { useEffect } from 'react';
import { useState } from 'react';
import Autocomplete from './Autocomplete';

const Search = ({ minLength, suggestionGenerator, placeholder }) => {
    const ref = React.useRef(null);
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const clickHandler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setActiveSuggestion(0);
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", clickHandler);
        return () => {
            document.removeEventListener("mousedown", clickHandler);
        };
    }, [ref]);

    const onClick = (e) => {
        if (search)
            setShowSuggestions(true);
    };

    const onChange = (e) => {
        const userInput = e.target.value;
        setSearch(userInput);
        setActiveSuggestion(0);
        if (!userInput || userInput.length < minLength) {
            setShowSuggestions(false);
            setSuggestions([]);
            return;
        }

        suggestionGenerator(userInput).then(suggestions => {
            setSuggestions(suggestions);
            setShowSuggestions(true);
        });
    };

    const onSelect = (e) => {
        setActiveSuggestion(0);
        setSuggestions([]);
        setSearch(e.target.innerText);
        setShowSuggestions(false);
        e.preventDefault();
        e.stopPropagation();
    };

    const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            setSearch(suggestions[activeSuggestion]);
            setSuggestions([]);
            setActiveSuggestion(0);
            setShowSuggestions(false);
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
            setActiveSuggestion((activeSuggestion + 1) % suggestions.length);
        }
    };

    return (
        <form className="navbar-form form-inline" ref={ref} onClick={onClick}>
            <div className="input-group search-box">
                <input
                    type='text'
                    id='search'
                    className='form-control'
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={search}
                />
                <span className="input-group-addon"><i className="material-icons"></i></span>
                {showSuggestions && <Autocomplete suggestions={suggestions} activeSuggestion={activeSuggestion} onClick={onSelect} />}
            </div>
        </form>
    );
};

export default Search;
