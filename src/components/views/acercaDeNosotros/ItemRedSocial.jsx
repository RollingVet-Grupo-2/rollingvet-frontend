import { ListGroupItem, Badge } from "react-bootstrap";

const ItemRedSocial = ({redSocialNombre, redSocialUrl, redSocialLogo, nombreDesarrollador}) => {
    return (
        <ListGroupItem className="border-0 shadow">
            <a
                href={redSocialUrl}
                target="_blank"
                className="link nav-link"
            >
                <div>
                    <h4 className="d-flex align-items-center justify-content-between">
                        {redSocialNombre}
                        <Badge bg="">
                            <img
                                className="logo"
                                src={redSocialLogo}
                                alt={`${nombreDesarrollador} ${redSocialNombre}`}
                            />
                        </Badge>
                    </h4>
                </div>
            </a>
        </ListGroupItem>
    );
};

export default ItemRedSocial;
