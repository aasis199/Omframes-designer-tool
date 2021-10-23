import styled from 'styled-components';

export const Navstyle = styled.div`
.custom_dropdown{
    padding:0px !important;
}
.dropdown-menu{
    font-size: 13px !important;
    border: none;
}
.dropdown-item:focus{
    background-color: rgb(33 33 33) !important;
    color: white;
}
.dropdown-item:active{
    background-color: rgb(33 33 33) !important;
    color: white;
}
@media only screen and (min-width: 570px){
    .list{
        margin-left: 55%;
        width: 45%;
        justify-content: space-around;
    }
    
`