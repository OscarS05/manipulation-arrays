//Exercise: Searcher

function filterByTerm(array, term) {
    console.log(array.filter(item => {
       return item.includes(term);
    }));
}

filterByTerm(["ana", "santi", "nico", "anastasia"], "ana");