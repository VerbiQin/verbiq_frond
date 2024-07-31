
export const Base_url = process.env.REACT_APP_SERVER_API_KEY;
console.log(process.env.REACT_APP_SERVER_API_KEY)

export const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleString()
}


export function RelaodPage(){
    window.location.reload();
  }

  export function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  