export const checkImageUrl=(url)=>{
    if(!url)return false
    else{
        const pattern='mik'
        return pattern.test(url)
    }
}