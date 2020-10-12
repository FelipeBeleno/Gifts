export const extraerData = async (category, paginate) => {

    const apiKey = `X2RR0AI5hwS8aAcPiK1vzAYxoL4Mi4Qj`;

    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${8}&offset=${paginate}`;

    const info = await fetch(url);

    const { data } = await info.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,

        }
    });


    return gifs;

}
