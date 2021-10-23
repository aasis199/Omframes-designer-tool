import React,{useState} from "react";
import { ProductStyle } from "./ProductStyle"
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactSlider from "react-slider";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@material-ui/core/Button';

const Product = [
    {
        id: 1,
        title: 'Plain Black Picture Frame',
        description: 'Versatile and Timeless - This smooth, satin finished frame pairs well with almost any artwork or photograph.',
        image: 'https://omframehouse.com.np/static/frames_test/1.jpg',
        swatch: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        price: '490.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'black',
        className: 'active',

    },
    {
        id: 2,
        title: 'Plain White Picture Frame',
        description: 'This profile is perfect for a contemporary look or to enhance vibrant colors.',
        image: 'https://omframehouse.com.np/static/frames_test/2.jpg',
        swatch: 'https://omframehouse.com.np/static/frames_test/swatch/2.jpg',
        price: '575.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'white',
        className: '',
    },
    {
        id: 3,
        title: 'Natural Wooden Picture Frame',
        description: 'This shade of maple with natural grain is a perfect choice for adding a pop of color that is still soft on the eyes.',
        image: 'https://omframehouse.com.np/static/frames_test/3.jpg',
        swatch: "https://omframehouse.com.np/static/frames_test/swatch/3.jpg",
        price: '550.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'white',
        className: '',

    },
    {
        id: 4,
        title: 'Brown Walnut Picture Frame',
        description: 'A rich medium-dark wood tone that is versatile for a range of decor styles',
        image: 'https://omframehouse.com.np/static/frames_test/4.jpg',
        swatch: 'https://omframehouse.com.np/static/frames_test/swatch/4.jpg',
        price: '550.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'white',
        className: '',

    },
    {
        id: 5,
        title: 'Metallic Gold Wooden Picture Frame',
        description: 'A sleek and modern wood frame with a polished gold finish. This transitional profile complements a wide array of art and decor styles.',
        image: 'https://omframehouse.com.np/static/frames_test/5.jpg',
        swatch: "https://omframehouse.com.np/static/frames_test/swatch/5.jpg",
        price: '575.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'gold',
        className: '',

    },
    {
        id: 6,
        title: 'Metallic Silver Wooden Picture Frame',
        description: 'A sleek and modern wood frame with a polished silver finish. This transitional profile complements a wide array of art and decor styles.',
        image: 'https://omframehouse.com.np/static/frames_test/6.jpg',
        swatch: "https://omframehouse.com.np/static/frames_test/swatch/6.jpg",
        price: '575.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'silver',
        className: '',

    },
    {
        id: 7,
        title: 'Weathered Black Wooden Picture Frame',
        description: 'Dark,weathered black but do not fully hide the wood grain in this rougher take on a modern black frame.',
        image: 'https://omframehouse.com.np/static/frames_test/7.jpg',
        swatch: "https://omframehouse.com.np/static/frames_test/swatch/7.jpg",
        price: '575.0',
        sample: 'https://omframehouse.com.np/static/frames_test/swatch/1.jpg',
        accent_color : 'black',
        className: '',

    },
]

const Mount = [
    {
        id: '1',
        title: 'Off-white',
        color: 'rgb(240 242 242)',
        className: 'active',
    },
    {
        id: '2',
        title: 'Black',
        color: 'rgb(33 33 33)',
        className: '',
    },
    {
        id: '3',
        title: 'Maroon',
        color: '#520e1f',
        className: '',
    }
]

export default function Products({ onChange, value, }) {
    const [range, setRange] = useState();
    const [nvalue, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function changeFrame(id, title, description, price, accent_color){
        var a = (id)
        $("#if_frame").css({
            'border-image-source': 'url(https://omframehouse.com.np/static/frames_test/' + a +'.jpg)',
        });
        document.getElementById('frame_title').innerHTML = (title);
        document.getElementById('frame_desc').innerHTML = (description);
        document.getElementById('frame_price').innerHTML = (price);
    }
    function changeMount(id){
        var a = (id)
        if(a === '1'){
            $("#if_mount").css({
             'box-shadow': 'rgb(0 0 0 / 0%) 0px 0px 0px inset, rgb(255 255 255) 0px 0px 0px 35px inset, rgb(234 235 235) 0px 1px 0px 35px inset, rgb(234 235 235) -1px 0px 0px 35px inset, rgb(240 242 242) 0px -1px 0px 35px inset, rgb(240 242 242) 1px 0px 0px 35px inset'
            });
        }
        else if(a === '2'){
            $("#if_mount").css({
                'box-shadow': 'rgb(0 0 0 / 0%) 0px 0px 0px inset, rgb(33 33 33) 0px 0px 0px 35px inset, rgb(38 36 36) 0px 1px 0px 35px inset, rgb(38 36 36) -1px 0px 0px 35px inset, rgb(51 51 51) 0px -1px 0px 35px inset, rgb(51 51 51) 1px 0px 0px 35px inset'
            });
        }
        else if(a === '3'){
            $("#if_mount").css({
                'box-shadow': 'rgb(82 14 31 / 0%) 0px 0px 0px inset, rgb(82 14 31) 0px 0px 0px 35px inset, rgb(82 14 31) 0px -1px 0px 35px inset, rgb(89 22 39) -1px 0px 0px 35px inset, rgb(89 22 39) 0px 1px 0px 35px inset'
            });
        }
        else if(a === '4'){
            $("#if_mount").css({
                'box-shadow': 'rgb(0 0 0 / 0%) 0px 0px 0px inset, rgb(255 255 255) 0px 0px 0px 35px inset, rgb(234 235 235) 0px 1px 0px 35px inset, rgb(234 235 235) -1px 0px 0px 35px inset, rgb(240 242 242) 0px -1px 0px 35px inset, rgb(240 242 242) 1px 0px 0px 35px inset'
            })
        }
    }
    
    return (
        <ProductStyle>
            <div className="d-md-none" style={{height: '120px'}}>
                <Box sx={{ width: '100%', typography: '' }}>
                  <TabContext value={nvalue}>
                    <Box sx={{ borderColor: 'black'}}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Profiles" value="1"  aria-selected="true" className="col-2 fw-5 fs-14"/>
                        <Tab label="Matting" value="2" className="col-2 fw-5 fs-14"/>
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                    <div className="d-flex py-2" align="center">
                        {Product.map((product, index) => (
                            <>
                                <li key={index}>
                                    <div className="swatch-frames" >
                                    <li onClick={() => changeFrame(product.id, product.title, product.description, product.price, product.accent_color)}  id={product.id} className="swatch_img"><img src={product.swatch}  alt={product.title} className="swatch_frame_img w-100"></img></li>
                                </div>
                                
                                </li>
                            </>
                        ))}
                    </div>
                    </TabPanel>

                    <TabPanel value="2">
                    <div className="swatch-mount d-flex flex-wrap py-2">
                        {Mount.map((mount, index) => (
                            <>
                                <span key={index} onClick={() => changeMount(mount.id)} id={mount.id} className="mount-id swatch_mount1" style={{backgroundColor: (mount.color)}}></span>
                            </>
                        ))}
                    </div>
                    {/* <Button className="mt-3" onClick={() => borderChange(2)}>Set to Golden Ratio</Button> */}
                    </TabPanel>
                  </TabContext>
                </Box>
            </div>



    <div className="d-none d-md-block" style={{'padding':'6px',}}>
        <p className="fs-16 mt-3">Frame Profiles</p>
        <div className="d-flex">
            {Product.map((product, index) => (
                <>
                    <li key={index}>
                        <div className="swatch-frames" >
                        <li onClick={() => changeFrame(product.id, product.title, product.description, product.price, product.accent_color)}  id={product.id} className="swatch_img"><img src={product.swatch}  alt={product.title} className="swatch_frame_img w-100"></img></li>
                    </div>
                    
                    </li>
                </>
            ))}
        </div>
        
        <div className="mount">
            <p className="fs-16 mt-3">Mat Colour / Width</p>
            <div className="swatch-mount d-flex">
                {Mount.map((mount, index) => (
                    <>
                        <span key={index} onClick={() => changeMount(mount.id)} id={mount.id} className="mount-id swatch_mount1" style={{backgroundColor: (mount.color)}}></span>
                    </>
                ))}

            </div>
        </div>

    </div>
        </ProductStyle>
    )
}