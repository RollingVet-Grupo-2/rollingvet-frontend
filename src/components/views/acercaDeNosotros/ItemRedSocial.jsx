import { ListGroupItem, Badge } from "react-bootstrap";

const ItemRedSocial = ({
    iconoRedSocial,
    nombreDesarrollador,
    nombreRedSocial,
    urlRedSocial,
}) => {
    return (
        <ListGroupItem className="border-0 shadow">
            <a
                href={urlRedSocial}
                target="_blank"
                className="link nav-link"
            >
                <div>
                    <h4 className="d-flex align-items-center justify-content-between">
                        {nombreRedSocial}
                        <Badge bg="">
                            <img
                                className="logo"
                                src={iconoRedSocial}
                                alt={`${nombreDesarrollador} ${nombreRedSocial}`}
                            />
                        </Badge>
                    </h4>
                </div>
            </a>
        </ListGroupItem>
    );
};

export default ItemRedSocial;
