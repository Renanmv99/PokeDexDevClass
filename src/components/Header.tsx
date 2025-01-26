import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

type Props = { showHomeBtn?: boolean, title: string}

export const Header = (props: Props) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="error">
                <Toolbar>
                    {props.showHomeBtn && (
                        <Button variant = "text">Home</Button>
                    )}
                    <Typography 
                        variant="h4" 
                        component="h1"
                        sx={{flexGrow: 1, textAlign: "center"}}>{props.title}</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}