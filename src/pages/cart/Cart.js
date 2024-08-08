import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Table } from "react-bootstrap";
import './cart.css'

export default function Cart() {

  return (
    <div>
      <Header />
      <div className="my-5 container p-2 overview">
        <Table striped bordered hover className="my-5">
          <thead>
            <tr>
              <th>STT</th>
              <th>Hình</th>
              <th>Tên xe</th>
              <th>địa điểm nhận</th>
              <th>địa điểm trả</th>
              <th>Ngày nhận</th>
              <th>Ngày trả</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td> 
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}
