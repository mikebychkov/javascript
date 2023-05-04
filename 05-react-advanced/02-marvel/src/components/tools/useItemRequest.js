import { useEffect, useState } from 'react';

const useItemRequest = (itemRequest, itemId) => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        itemRequest(itemId)
            .then(item => setItem(item))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {item, loading};
}

export default useItemRequest;