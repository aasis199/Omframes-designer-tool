import styled from 'styled-components';

export const EnvStyle = styled.div`
    .wall{
        background-size: cover;
        height: 60vh; 
        background-image: url("https://omframehouse.com.np/static/frames_test/wall-texture-white.jpg");
        position: relative;
        text-align: center;
        font-size: 13px;
    }
    .uploaded-image{
      max-height: 30vh;
      max-width: 50vw;
      z-index:1;
      background: linear-gradient(-135deg, rgb(37, 37, 40) 0%, rgba(37, 37, 40, 0.9) 35%, rgba(37, 37, 40, 0.8) 100%);
    }
    .middle{
        position: absolute;
        margin-top:55%;
        margin-left:50%;
        transform: translate(-50%, -50%);
    }

    .init{
        width: 362px;
        box-shadow: rgb(0 0 0 / 70%) 0px 2px 5px inset, rgb(0 0 0 / 30%) -2px 13px 10px;
    }
    .init_mat{
        width: 322px;
    }
    input[type=file]{
        display:none;
    }
    .overlay{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(49, 49, 49, 0.8);
    }
    @media only screen and (min-width: 570px){
        .wall{
            height: 90vh;
        }
        .init{
            width: 362px;
            box-shadow: rgb(0 0 0 / 70%) 0px 2px 5px inset, rgb(0 0 0 / 30%) -2px 13px 10px;
        }
        .init_mat{
            width: 322px;
        }
        .middle{
            position: absolute;
            margin-top:40%;
            margin-left:50%;
            transform: translate(-50%, -50%);
        }
        .uploaded-image{
            max-height: 90vh;
            height: 45vh;
             }
    }
`