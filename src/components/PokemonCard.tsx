import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material"
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
    pokemonName: string
    pokemonNumber: number
    pokemonType: string;
}

const typeColors: Record<string, string> = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    default: "#F7F7F7",
};

export const PokemonCard = (props: Props) =>{

    const formattedName = props.pokemonName.slice(1).toLowerCase()
    const bgColor = typeColors[props.pokemonType] || typeColors.default;

    return(
        <Card key={props.pokemonName} sx={{height: "100%", display: "flex"}}>
        <CardActionArea
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: bgColor
            }}
        >
            <CardMedia sx={{width: "96px", height: "96px"}}>
            <LazyLoadImage
                alt={`${props.pokemonName} image`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonNumber}.png`}
                width={"96px"}
                height={"96px"}
                placeholder={<CircularProgress />}/>
            </CardMedia>
            <CardContent>
                <Typography>
                    {props.pokemonNumber}. {props.pokemonName.charAt(0).toUpperCase() + formattedName}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
}