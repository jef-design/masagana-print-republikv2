import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import JerseySubli from "../assets/images/jersey-subli.jpg";
import Silks from "../assets/images/silk.gif";
import Tarpaulin from "../assets/images/tarpaulin-bday.jpg";
import Invitation from "../assets/images/invitation-bday.jpg";
import Mugs from "../assets/images/reg mug.jpg";
import Stickers from "../assets/images/stickers.jpg";
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: '"Poppins",serif',
        textTransform: 'none',
        fontSize: 14,
      },
    },
  });
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}
    >
      <Tabs
       orientation="vertical"
       // variant="scrollable"
       scrollButtons={false}
       variant="fullWidth"
       value={value}
       onChange={handleChange}
       indicatorColor="secondary"
       aria-label="Vertical tabs example"
       sx={{borderRight: 1, borderColor: "divider"}}
      >
         <Tab label="Full Sublimation" {...a11yProps(0)} />
                <Tab label="Silkscreen Printing" {...a11yProps(1)} />
                <Tab label="Vinyl and DTF" {...a11yProps(2)} />
                <Tab label="Tarpaulin Printing" {...a11yProps(3)} />
                <Tab label="Invitation" {...a11yProps(4)} />
                <Tab label="Souvenirs" {...a11yProps(5)} />
                <Tab label="Decals and Stickers label" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
                <p className="font-bold">Full Sublimation (Jersey, Polo Shirt, T-Shirt, Longsleeve)</p>
                <img className="w-[250px] py-4" src={JerseySubli} alt="" />
                <article className="max-w-[650px] mt-2">
                    Our service entails utilizing sublimation, a manufacturing technique that intricately integrates the
                    complete jersey design directly into the fabric. The process involves infusing colors, design
                    elements, logos, numbers, and player names directly into the fabric, creating a seamless and
                    cohesive final product. This begins with the creation of digital designs on graphic design
                    applications, transforming them into vibrant and lasting sublimation jerseys, tshirts etc.
                </article>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <p className="font-bold">Silkscreen Printing(Quality Ruberized Prints)</p>
                <img className="w-[250px] py-4" src={Silks} alt="" />
                <article className="max-w-[650px] mt-2">
                    Introducing our Silkscreen Printing services, where craftsmanship meets customization. Silkscreen
                    printing is a timeless technique that delivers crisp, high-quality designs on a variety of fabrics.
                    Whether you're looking to create branded T-shirts, promotional items, or personalized apparel, our
                    silkscreen printing brings your vision to life with precision and detail. <br />
                    <br /> Each piece is a testament to our commitment to quality, ensuring that your designs stand out
                    with vibrant colors and durability. Elevate your brand or express your unique style with our
                    expertly executed silkscreen printing – a seamless blend of artistry and wearability. Let your
                    imagination flow, and we'll turn it into a tangible, visually striking reality.
                </article>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <p className="font-bold">Vinyl and DTF(High Quality Printing Services)</p>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <p className="font-bold">Tarpaulin Printing</p>
                <img className="w-[350px] py-4" src={Tarpaulin} alt="" />
                <article className="max-w-[650px] mt-2">
                    We take pride in delivering bespoke solutions for all your tarpaulin printing needs. Whether you're
                    looking to promote your business, organize an event, or simply add a personalized touch to your
                    space, our tarpaulin printing service has got you covered. <br /> <br /> From custom sizes to
                    eye-catching graphics, we work closely with our clients to bring their ideas to life. Experience the
                    perfect blend of innovation and reliability with our tarpaulin printing service, where your vision
                    is our commitment.
                </article>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <p className="font-bold">Invitation(Wedding, Birthday, Baptism)</p>
                <img className="w-[350px] py-4" src={Invitation} alt="" />
                <article className="max-w-[650px] mt-2">
                    Where your invitations come to life! Explore our diverse designs, customize effortlessly, and let us
                    bring your vision to print. With top-notch quality and a touch of craftsmanship, we're here to make
                    your celebrations memorable.
                </article>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <p className="font-bold"> Souvenirs(Ref Magnet, Magic & Regular Mugs, Umbrella with print)</p>
                <img className="w-[350px] py-4" src={Mugs} alt="" />
                <article className="max-w-[650px] mt-2">
                    Elevate your memories with our exquisite souvenir collection. Our specialized
                    service offers a diverse range of personalized keepsakes, including charming mugs and captivating
                    refrigerator magnets that will immortalize your special moments. Whether you're commemorating a
                    joyous event, celebrating a milestone, or promoting your brand in a unique way, our souvenir items
                    are the perfect choice. <br /> <br /> Our mugs are crafted with precision and adorned with your chosen designs,
                    creating a delightful combination of functionality and sentimentality. Additionally, our ref magnets
                    serve as miniature canvases, preserving memories in a form that can be displayed with pride.
                </article>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <p className="font-bold"> Decals and Sticker (Waterproof and Transparent)</p>
                <img className="w-[350px] py-4" src={Stickers} alt="" />
                <article className="max-w-[650px] mt-2">
                    Your ultimate destination for bespoke decals, and stickers! Whether it's crafting the perfect
                    invitation for your special event or adding a personalized touch to your belongings with our decals
                    and stickers, we've got you covered.
                    <br /> <br />
                    Explore our diverse designs, customize with ease, and let us bring your ideas to vibrant life.
                    Quality craftsmanship and personalized service are our hallmarks.
                </article>
            </TabPanel>
    </Box>
    </ThemeProvider>
    
  );
}