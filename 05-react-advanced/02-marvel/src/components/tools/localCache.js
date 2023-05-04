
const cacheObject = (storageName, obj) => {

    localStorage.setItem(storageName, JSON.stringify(obj));
}

const restoreCachedArray = (storageName, setArray, setLoading = () => {}) => {

    const storage = localStorage.getItem(storageName);
    if (storage) {
        let cachedArray = [];
        try {
            cachedArray = JSON.parse(storage);
        } catch {}
        if (cachedArray.length > 0) {
            setArray(cachedArray);
            setLoading(false);
            return true;
        }
    }    
    return false;
}

const restoreCachedObject = (storageName, setObject, setLoading = () => {}) => {

    const storage = localStorage.getItem(storageName);
    if (storage) {
        let cachedObject = {};
        try {
            cachedObject = JSON.parse(storage);
        } catch {}
        if (cachedObject.id) {
            setObject(cachedObject);
            setLoading(false);
            return true;
        }
    }
    return false;
}

export { cacheObject, restoreCachedArray, restoreCachedObject };