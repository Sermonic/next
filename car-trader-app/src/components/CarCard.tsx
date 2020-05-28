import Link from "next/link";
import {
  Card,
  CardHeader,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";
import { CarModel } from "../../api/Car";

export interface CarCardProps {
  car: CarModel;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    achortTag: {
      textDecoration: "none",
    },
  })
);

export function CarCard({ car }: CarCardProps) {
  const classes = useStyles();

  return (
    <Link
      href="/car/[make]/[brand]/[id]"
      as={`/car/${car.make}/${car.model}/${car.id}`}
    >
      <a className={classes.achortTag}>
        <Card elevation={3}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                CT
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={car.make + " " + car.model}
            subheader={`$${car.price}`}
          />
          <CardMedia
            className={classes.media}
            image={car.photoUrl}
            title={car.make + " " + car.model}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {car.details}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
