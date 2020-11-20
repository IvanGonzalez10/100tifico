export const getHash = () => location.hash.slide(1).toLocateLowerCase().split('/')[1] || '/';


