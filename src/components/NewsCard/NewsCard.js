import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NewsCard = ({oneNews}) => {

    const {title, body} = oneNews;

    return (
            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Read more
                    </Button>
                </CardActions>
                    <CardMedia
                        component="img"
                        height="175"
                        image="https://t3.ftcdn.net/jpg/03/56/03/70/360_F_356037051_LSA3krwfHoQmhAGvin9wL4WghHI6qBC1.jpg"
                        alt="oneNews_logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
};

export {NewsCard};