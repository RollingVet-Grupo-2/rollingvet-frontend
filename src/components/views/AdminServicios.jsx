import { Button, Col, Container, Row, Table } from "react-bootstrap";
import imgAdminServicio from "../../assets/img/Principal/principal_Ilustracion1.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemServicio from "./servicios/ItemServicio";
import { obtenerServicios } from "../helpers/queries";
import Swal from "sweetalert2";

const AdminServicios = () => {
    const [servicios, setServicios] = useState([]);
    useEffect(()=>{
      //consulta a la api
      obtenerServicios().then((respuesta)=>{
        if(respuesta){
          setServicios(respuesta)
        }else{
          Swal.fire({
            title: "Oops! Lo siento!",
            text: "No se pudo obtener la lista de servicios. Intente nuevamente más tarde.",
            icon: "error",
            iconColor: "#fb3154",
            background: "#062e32",
            color: "#41e9a6",
            confirmButtonColor: "#41e9a6",
          });
        }
      })
      //guardar en el state
    },[])

  return (
    <Container className="my-5">
      <h1 className="display-3">Administrador de Servicios</h1>
      <p className="lead">
        Desde aqui puede ver todos los servicios disponibles, crear nuevos servicios para ofrecer y modificarlos.
      </p>
      <Container className="mb-3 mb-md-0">
        <Row className="g-3">
          <Col className="w-100 d-flex align-items-center justify-content-center">
            <Link to={"/administrador/crear-servicio"} className="w-100">
              <Button variant="primary" size="lg" className="p-3 rounded-4 w-100">
                Agregar <b>SERVICIO</b>
              </Button>
            </Link>
          </Col>
          <Col>
            <img src={imgAdminServicio} alt="Servicio" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <h2 className="display-4 py-3">Lista de Servicios</h2>
        <Row className="g-3 justify-content-center">
          <Table responsive striped bordered hover variant="dark" className="table-center text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Veterinario</th>
                <th>URL Imágen</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                servicios.map((servicio)=><ItemServicio key={servicio.id} servicio={servicio}/>)
              }
              </tbody>
          </Table>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminServicios;
