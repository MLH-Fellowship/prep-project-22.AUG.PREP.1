import React from 'react';
import './Autocomplete.css';

const Autocomplete = ({ suggestions, activeSuggestion, onClick }) => {
    if (suggestions.length) {
        return (
            <ul className='suggestions'>
                {suggestions.map((suggestion, index) => {
                    return (
                        <li
                            className={index === activeSuggestion ? 'suggestion-active suggestion-item' : 'suggestion-item'}
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
        return (
            <ul className='suggestions'>
                <li><em>No suggestions, you're on your own!</em></li>
            </ul>
        );
    }
};

export default Autocomplete;
