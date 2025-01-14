import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import ImageGallery from "../components/ImageGallery"

const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>30 de Mayo, 1992</Typography>

            </Grid>
            <Grid>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa un título"
                    label="Tìtulo"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Qué sucedió hoy?"
                    label="Título"
                    minRows={5}
                />
            </Grid>

            {/* Image gallery */}
            <ImageGallery/>
        </Grid>
    )
}

export default NoteView
