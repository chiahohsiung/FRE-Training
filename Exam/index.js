async function searchAlbums(name) {
    const baseurl = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=500`;
    const res = await fetch(baseurl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    return res.json();
}

searchAlbums('swift').then(data => console.log(data.results));