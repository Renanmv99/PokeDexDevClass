import { Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from "../components/PokemonCard";
import ScrollToTopButton from "../components/ScrollToTopButton";

const CustomLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: block;
`;

export function Root() {
    const { pokemons, next } = useLoaderData() as { pokemons: any[], next: string };

    const [pokemonList, setPokemonList] = React.useState(pokemons);
    const [nextPage, setNextPage] = React.useState(next);

    const fetchPokemonDetails = async (pokemon: any, index: number) => {
        try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return {
                ...pokemon,
                number: index + 1,
                type: data.types[0].type.name,
            };
        } catch (error) {
            console.error("Erro ao buscar detalhes do Pokémon:", error);
            return { ...pokemon, number: index + 1, type: "unknown" };
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const detailedPokemons = await Promise.all(
                pokemons.map((pokemon, index) => fetchPokemonDetails(pokemon, index))
            );
            setPokemonList(detailedPokemons);
        };
        fetchData();
    }, [pokemons]);

    const fetchNextPage = async () => {
        try {
            const res = await fetch(nextPage);
            const data = await res.json();

            const detailedPokemons = await Promise.all(
                data.results.map((pokemon: any, index: number) =>
                    fetchPokemonDetails(pokemon, pokemonList.length + index)
                )
            );

            setPokemonList((prev) => [...prev, ...detailedPokemons]);
            setNextPage(data.next);
        } catch (error) {
            console.error("Erro ao buscar próxima página:", error);
        }
    };

    return (
        <>
            <ScrollRestoration />
            <Header title="PokeDex" />
            <Container maxWidth="lg" sx={{ padding: "1.5rem" }}>
                <ScrollToTopButton />
                <InfiniteScroll
                    dataLength={pokemonList.length}
                    next={fetchNextPage}
                    hasMore={!!nextPage}
                    loader={<Typography>Loading...</Typography>}
                >
                    <Grid container spacing={2}>
                        {pokemonList.map((item) => (
                            <Grid item key={item.name} xs={12} sm={6} md={4}>
                                <CustomLink to={`/pokemon/${item.number}`}>
                                    <PokemonCard 
                                        pokemonName={item.name} 
                                        pokemonNumber={item.number} 
                                        pokemonType={item.type}
                                    />
                                </CustomLink>
                            </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            </Container>
        </>
    );
}
