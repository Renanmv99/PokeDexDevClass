import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { typeColors } from "../types"

type Props = {
    pokemonName: string
    pokemonNumber: number
    pokemonType: string;
}

export const PokemonCard = (props: Props) =>{

    const formattedName = props.pokemonName.slice(1).toLowerCase()
    const bgColor = typeColors[props.pokemonType] || typeColors.default;

    return(
        <Card key={props.pokemonName} sx={{height: "100%", display: "flex", color: "white"}}>
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