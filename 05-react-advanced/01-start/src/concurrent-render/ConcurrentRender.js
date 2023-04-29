import data from './data';
import {useState, useMemo, useDeferredValue, useTransition} from 'react';

function ConcurrentRender() {
    
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);

    // USE-DEFFERED-VALUE EXAMPLE

    const deferText = useDeferredValue(text);

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(deferText));
    }, [deferText]);

    const onValueChange = (e) => {
        setText(e.target.value);
    };

    const isPending = false;


    // USE-TRANSITION EXAMPLE

    // const [isPending, startTransition] = useTransition();

    // const filteredPosts = useMemo(() => {
    //     return posts.filter(item => item.name.toLowerCase().includes(text));
    // }, [text]);

    // const onValueChange = (e) => {
    //     startTransition(() => {                  // USING 'startTransition' WORK MUCH WORSE, ESPECIALLY IN FIREFOX
    //         setText(e.target.value);
    //     });        
    // }


    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {isPending ? 'Loading...' : filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ConcurrentRender;
