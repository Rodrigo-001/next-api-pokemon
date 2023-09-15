export async function generateStaticParams(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const {results: pokemons} = await response.json();
    return pokemons.map((pokemon: any) => ({        
        slug: pokemon.name        
    }));
}

export defult async function InfoDetails({params, }: {params: {slug: string};}){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
    const pokemon = await response.json();

    return <div>
        <h2>
            {pokemon.name}
        </h2>
    </div>
}