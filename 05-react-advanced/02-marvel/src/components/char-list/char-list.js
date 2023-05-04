import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import CharListItem from "../char-list-item/char-list-item";
import MySpinner from '../spinner/my-spinner';
import { cacheObject, restoreCachedArray, restoreCachedObject } from '../tools/localCache';

const CharList = ({onCharActive}) => {

    const marvelService = MarvelService();

    const [activeChar, setActiveChar] = useState({});
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [charEnded, setCharEnded] = useState(false);

    const initOffset = Math.floor(Math.random() * 20) * 100 + Math.floor(Math.random() * 10) * 10;

    useEffect(() => {
        loadChars();
        onSetActive();
    }, []);

    useEffect(() => {
        onCharActive(activeChar);
        cacheObject('charListActiveChar', activeChar);
    }, [activeChar]);

    useEffect(() => {
        cacheObject('charListChars', chars);
    }, [chars]);

    const onSetActive = (char) => {
        if (!char) {
            restoreCachedObject('charListActiveChar', setActiveChar);
            return;
        };
        setActiveChar(char);
    }

    const loadChars = () => {

        if (chars.length === 0) {
            if (restoreCachedArray('charListChars', setChars, setLoading)) {
                return;
            }
        }

        setLoading(true);
        
        const resentOffset = initOffset + chars.length;

        marvelService.getChars(9, resentOffset)
            .then(newChars => {

                setChars(chars => {
                    return [...chars, ...newChars];
                });                
                setCharEnded(newChars.length > 0 && newChars.length < 9);

            }).finally(() => {
                setLoading(false);
            });
    }

    const content = chars.map(it => {
        return <CharListItem key={it.id} char={it} onSetActive={onSetActive} isActive={it.id === activeChar.id}/>;
    });

    const spinner = loading ? <MySpinner/> : null;
    const btnStyle = charEnded ? {display: 'none'} : {display: 'block'};

    return (
        <div className="char__list">
            <ul className="char__grid">
                {content}
                {spinner}
            </ul>
            <button className="button button__main button__long" onClick={loadChars} disabled={loading} style={btnStyle}>
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default CharList;