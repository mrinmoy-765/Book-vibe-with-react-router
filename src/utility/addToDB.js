const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoreReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        alert(id +" already exists in the read list");
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
    }
}







const getStoredWishList = () =>{
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr) {
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
    }else{
        return [];
    }
}

const addToStoreWishList = (id) =>{
    const storedWish = getStoredWishList();
    if(storedWish.includes(id)){
        alert(id + " already exists in the wish list");
    }else{
        storedWish.push(id);
        const storedWishStr = JSON.stringify(storedWish);
        localStorage.setItem('read-list',storedWishStr)
    }
}

export {addToStoreReadList,addToStoreWishList,getStoredReadList}