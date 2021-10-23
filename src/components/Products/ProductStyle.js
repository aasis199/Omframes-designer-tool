import styled from "styled-components";

export const ProductStyle = styled.div`

    .active{
      border: 1px solid black;
    }
    .swatch-frames{
        display:flex;
        justidy-content: space-around;
        width: 40px;
        margin-left: 10px;

    }
    .swatch_frame_img{
        cursor: pointer;
        border-radius: 3px;
        border: 1px solid #eee;
        padding: 2px;
    }
     .mount-id{
        width:35px;
        height: 35px;
        padding: 2px;
        cursor: pointer;
        border: 1px solid #eee;
        border-radius: 3px;
        margin-left: 10px;
    }
    .slidecontainer {
        margin-left: 1rem;line-height: 35px;
      }


    .horizontal-slider {
        margin-left:10px;
        width: 100%;
        line-height: 30px;
        max-width: 150px;
      }
      .example-thumb {
        cursor: pointer;
        background: #ffffff;
        border: 10px solid #3774ff;
        border-radius: 100%;
        display: block;
        box-shadow: 0 0 2px 0 rgb(0 0 0 / 44%);
      }
      .example-thumb.active {
        background-color: grey;
      }
      .example-track {
        position: relative;
        background: #ddd;
      }
      .example-track.example-track-0 {
        background: #83a9ff;
      }
      .horizontal-slider .example-track {
          position:absolute;
        top: 18px;
        height: 8px;
      }
      .horizontal-slider .example-thumb {
        top: 12px;
        width: 10px;
        outline: none;
        height: 10px;
        line-height: 38px;
      }


      .css-1aquho2-MuiTabs-indicator{
        background-color: #212121;
      }
`