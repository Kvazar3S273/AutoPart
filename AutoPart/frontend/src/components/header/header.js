import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutservice } from '../../service/logout.service';
import { LOG_OUT } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as head from '../header/headitems';
import * as headuser from '../headbar/headitemuser';
import { Menubar } from 'primereact/menubar';
import {Button} from 'primereact/button';
import { push } from 'connected-react-router';



const Header = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const navigatePage=(url)=>{
        dispatch(push(url));
    };


    const getMenuObject=(menu)=>{
       
        let menuObj={};

        menuObj.label=menu.label;

        if(menu.items){
             menuObj.items=menu.items.map(curitem=>{
                return getMenuObject(curitem);
            });  
        }
        if(menu.icon){
            menuObj.icon=menu.icon;
        }
        if(menu.url){
            menuObj.command=()=>{
               navigatePage(menu.url);
            }
        }
       
        return menuObj;
    }

    const navigationMenu=head.headitems.map(menuItem=>{
        return getMenuObject(menuItem);
    })

    const navigationMenuUser=headuser.headitemuser.map(menuItem=>{
        return getMenuObject(menuItem);
    })


    const logout = () => {
        logoutservice.logout();
        dispatch({ type: LOG_OUT });
        history.push('/');
    };
     const {isAuth, user } = useSelector(res => res.auth);

    return (
        !isAuth ?
        <Menubar style={{backgroundColor:'#ede9f2'}} model={navigationMenu} />
        :
        <Menubar style={{backgroundColor:'#ede9f2'}} model={navigationMenuUser}
        end={<Button label={user.name} onClick={logout} icon="pi pi-power-off" style={{backgroundColor:'#f27cc9'}}/>}
         />
       
    )

}

export default Header;