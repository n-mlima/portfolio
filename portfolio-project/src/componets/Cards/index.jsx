import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 200, margin: 1, padding:1, height: 200, display: 'flex', flexDirection: 'column', background:'linear-gradient(135deg, rgba(133, 212, 238, 0.836) 0%, rgba(39, 100, 214, 0.904) 100%)',
    '@media (max-width: 768px)': {
      maxWidth: 120,
      height:180, // Expandir para toda a largura
      marginBottom: 1,
       // Espaçamento entre os cards
    }, }}>
      <CardActionArea sx={{ flex: 1, display: 'flex', flexDirection: 'column' ,
    }}>
        <CardMedia
          component="img"
          height="60"
          width="60"
          image={image}
          alt={title}
          sx={{ width: '60%', objectFit: 'fill', flexShrink: 0,
          '@media (max-width: 768px)': {
            height: 40, // Expandir para toda a largura
            width:40,
             // Espaçamento entre os cards
          }, }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{ fontSize: '2.1rem' }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary', fontSize: '1.7rem' }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
