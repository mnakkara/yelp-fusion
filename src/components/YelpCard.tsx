import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const host = 'https://yelp-fusion-api.herokuapp.com/';
// if running server locally, use below host url instead
//'http://localhost:3001/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 700,
      margin: '10px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

function YelpCard(props: any) {
  const business = props.business;
  const classes = useStyles();

  const [review, setReview] = useState(null);

  useEffect(() => {
    axios
      .get(`${host}businesses/reviews/${business.id}`)
      .then((resp) => {
        setReview(resp.data);
      })
      .catch((e) => console.log('Error :', e));
  }, [business.id]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={business.name}
        subheader={`${business.location.address1}, ${business.location.city}, ${business.location.zip_code}`}
      />
      <CardMedia
        className={classes.media}
        image={business.image_url}
        title=''
      />
      {review != null && (
        <div>
          <div>
            <CardHeader
              title={(review as any).user.name}
              titleTypographyProps={{ align: 'left', variant: 'subtitle1' }}
              subheader={
                <Rating
                  name='simple-controlled'
                  value={(review as any).rating}
                />
              }
              subheaderTypographyProps={{ align: 'left' }}
              avatar={
                <Avatar
                  aria-label='review user'
                  className={classes.avatar}
                  alt={(review as any).user.name}
                  src={(review as any).user.image_url}
                />
              }
            />
          </div>
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {(review as any).text}
            </Typography>
          </CardContent>
        </div>
      )}
    </Card>
  );
}

export default YelpCard;
