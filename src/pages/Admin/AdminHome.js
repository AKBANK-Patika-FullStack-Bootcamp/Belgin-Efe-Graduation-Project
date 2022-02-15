import React from 'react';
import { useParams } from 'react-router-dom';
import '../Admin/Admin.css';
function AdminHome() {

    let {adminhome} = useParams();

    return (
        <div className='container px-4'>
            <div class="row d-block">
                    <div className='col'>
                    <h3 className="fs-4 my-3 text-light">Kullanıcı Listesi</h3>
                    </div>
                    <div class="col my-3">
                        <table class="table bg-white table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">İsim - Soyisim</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Melek Aslan</td>
                                    <td>melek@hotmail.com</td>
                                    <td>553 486 1722</td>
                                </tr>
                                <tr>
                                    <td>Anıl Yaşar</td>
                                    <td>anıl@hotmail.com</td>
                                    <td>553 486 1722</td>
                                </tr>
                                <tr>
                                    <td>Aslı Kabataş</td>
                                    <td>aslı@gmail.com</td>
                                    <td>553 486 1722</td>
                                </tr>
                                <tr>
                                    <td>Burak Sürmeli</td>
                                    <td>burak@hotmail.com</td>
                                    <td>553 486 1722</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default AdminHome
