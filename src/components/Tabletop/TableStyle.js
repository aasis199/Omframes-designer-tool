import styled from 'styled-components';

export const TableStyle = styled.div`
.wall{
    background: url('https://d29mtkonxnc5fw.cloudfront.net/site_assets/wall-texture-white.jpg');
    background-repeat: no-repeat;
    height: 50vh;
    position: relative;
}
.uploaded_image{
    width: calc( 100% - 70px);
    z-index:7 ;
    object-fit:contain;
 }
input{
    background-color: none;
    border: none;
}
.middle{
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    position: absolute;
}
.main{
    background: linear-gradient(-135deg, rgb(37, 37, 40) 0%, rgba(37, 37, 40, 0.9) 35%, rgba(37, 37, 40, 0.8) 100%);
}
.overlay{
    position: relative;
}
.if_frame{
    border-image-slice: 100;
    border-style: solid;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-width: 20px;
    border-image-source: url(https://omframehouse.com.np/static/frames_test/1.jpg);
    border-image-width: 20px;
    border-image-repeat: stretch;
    width: 262px;
    height: 310px;
    box-shadow: rgb(0 0 0 / 70%) 0px 2px 5px inset, rgb(0 0 0 / 30%) -2px 13px 10px;
    z-index: 999999;
}
.if_mount{
    width: 222px;
    height: 270px;
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px inset, rgb(255 255 255) 0px 0px 0px 35px inset, rgb(234 235 235) 0px 1px 0px 35px inset, rgb(234 235 235) -1px 0px 0px 35px inset, rgb(240 242 242) 0px -1px 0px 35px inset, rgb(240 242 242) 1px 0px 0px 35px inset
}

@media only screen and (min-width: 570px){
    .wall{
        height: 90vh;
    }
}
`