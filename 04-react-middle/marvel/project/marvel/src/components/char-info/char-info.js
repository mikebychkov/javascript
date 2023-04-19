import charimg from '../../img/thor.jpeg';

import CharInfoComics from '../char-info-comics/char-info-comics';
import CharInfoSkeleton from '../char-info-skeleton/char-info-skeleton';

const CharInfo = () => {

    return (
        <div class="char__info">
            <div class="char__basics">
                <img src={charimg} alt="abyss"/>
                <div>
                    <div class="char__info-name">thor</div>
                    <div class="char__btns">
                        <a href="#" class="button button__main">
                            <div class="inner">homepage</div>
                        </a>
                        <a href="#" class="button button__secondary">
                            <div class="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="char__descr">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </div>
            <CharInfoComics/>
            <CharInfoSkeleton/>
        </div>
    )
};

export default CharInfo;