import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Button, Table } from "react-bootstrap";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, editCar } from "../../redux/cartSlice";


export default function Cart() {
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    id: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { listPickCar } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handle_delete = (id) => {
    dispatch(deleteCar(id));
  };

  const handle_edit = (item) => {
    if (editingItemId === item.id) {
      dispatch(editCar(editedItem));
      setEditingItemId(null);
    } else {
      setEditingItemId(item.id);
      setEditedItem({
        pickUpLocation: item.pickUpLocation,
        dropOffLocation: item.dropOffLocation,
        pickUpDate: item.pickUpDate,
        dropOffDate: item.dropOffDate,
        id: item.id,
      });
    }
  };
  
  const handleChange = (field, value) => {
    setEditedItem(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

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
              <th>Địa điểm nhận</th>
              <th>Địa điểm trả</th>
              <th>Ngày nhận</th>
              <th>Ngày trả</th>
              <th>Thành tiền</th>
              <th>Trạng thái</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {listPickCar.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/${item.car.image}.jpg`}
                    style={{ width: "100px", height: "70px" }}
                    alt={item.car.name}
                  />
                </td>
                <td>{item.car.name}</td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      value={editedItem.pickUpLocation}
                      onChange={(e) => handleChange('pickUpLocation', e.target.value)}
                    />
                  ) : (
                    item.pickUpLocation
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      value={editedItem.dropOffLocation}
                      onChange={(e) => handleChange('dropOffLocation', e.target.value)}
                    />
                  ) : (
                    item.dropOffLocation
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="date"
                      value={editedItem.pickUpDate}
                      onChange={(e) => handleChange('pickUpDate', e.target.value)}
                    />
                  ) : (
                    item.pickUpDate
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="date"
                      value={editedItem.dropOffDate}
                      onChange={(e) => handleChange('dropOffDate', e.target.value)}
                    />
                  ) : (
                    item.dropOffDate
                  )}
                </td>
                <td>{item.price}$</td>
                <td>Xe đang trên đường tới</td>
                <td>
                  <Button onClick={() => handle_edit(item)}>
                    {editingItemId === item.id ? "Lưu" : "Sửa"}
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handle_delete(item)}>Xóa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}
