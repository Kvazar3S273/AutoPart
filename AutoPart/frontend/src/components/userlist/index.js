import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import http from "../../http_common";
import { GetUser } from '../../actions/users';

const GetUserList = () => {
    const dispatch = useDispatch();
    const { userList } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(GetUser());
    }, []);
    return (
        <>
            <table className="table">
                <thead className="table table-light">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {userList && userList.map((item) =>
                        <tr key={item.email}>
                            <td>
                                <img src={http.defaults.baseURL + item.photo}
                                    alt="user photo"
                                    width="150"
                                />
                            </td>
                            <td>{item.email}</td>
                        </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default GetUserList;